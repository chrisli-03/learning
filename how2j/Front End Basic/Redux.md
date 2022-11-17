## Redux

#### What is Redux

Redux is A _predictable_ state container for JavaScript apps. (Although commonly used with `react`, redux is __not__ a react plugin.)

#### Three Principles

###### Single source of truth

_The state_ of your whole application is stored in an object tree within a single store.

Advantages to this: 

1. Make state from server easy to serialize and hydrate into client.

2. Easier to debug or inspect an application.

3. Allow you to persist your app's state in development, increase development speed.

###### State is read-only

_The only way to change the state is to emit an **action**, an object describing what happened._

This means view or network callbacks never writes directly to the state, instead they express an intent to transform the state. Because all changes are centralized and happens one by one in a strict order, there are no race condition issues. And because actions are just plain objects, they can be logged, serialized, stored, and later replayed for debugging or testing purpose.

###### Changes are made with pure functions

_To specify how the state tree is transformed by actions, you write pure reducers._

Reducers are pure function that takes the previous state and an action as parameters, then compute and return the next state. It is important to __return__ a new state object and __not mutate__ the previous state. 

#### Using Redux

###### State

Assume we have state like this

```js
const state = {
    todos: [
        { text: 'example' }
    ]
}
```

###### Actions

Payloads of information that send data from your application to the store, send them with `store.dispatch()`

Example

```js
const ADD_TODO = 'ADD_TODO'
// this is an example of an action
{
    type: ADD_TODO,
    text: 'Example'
}
```

Structure of an action object is customizable, read [Flux Standard Action](https://github.com/redux-utilities/flux-standard-action) for recommendations on how to construct an action.

Action Creators,  returns an action

```js
function addTodo(text) {
    return {
        type: ADD_TODO,
        text    
    }
}
```

You can now dispatch action created by action creator with `dispatch()`, example `dispatch(addTodo('example'))` or create a __bound action creator__ that automatically dispatches like so `const boundAddTodo = text => dispatch(addTodo(text))`

__Note:__ `dispatch()` can be accessed from the store as `store.dispatch()`, but if you're using it with `react`, most likely you will be using a helper such as react-redux's `connect()`, you can use `bindActionCreators()` to automatically bind many action creators to a `dispatch()` function.

###### Reducers

Specify how the application's state changes in response to an action sent to the store. An action only describe _what happened_ but not how the application's state changes.

A reducer is a pure function that takes the previous state and an action, then returns the next state. A pure function always returns the same result given the same arguments.

`(previousState, action) => newState`

What __not__ to do in a reducer:

- Mutate its arguments

- Perform side effects like API calls and routing transitions

- Call non-pure function, e.g. `Date.now()` or `Math.random()`

Example

```js
function todosReducer(state = [], action) { // state default value is []
    switch (action.type) {
        case ADD_TODO: // adds a new todo to state
            return [
                ...state,
                { text: action.text }
            ]
        // add more cases to handle more action types
        ...
        default:
            return state
    }    
}
```

Each reducer should manage its own part of the global state, the `state` parameter is expected to be different for every reducer, and corresponds to the part of the state it manages.

Combine reducers with `combineReducers()`

```js
import { combineReducers } from 'redux'

const reducer = combineReducers({
    todos: todoReducer // the key todos corresponding to todos key in state
})
```

this is equivalent to

```js
function reducer(state = {}, action) {
    return {
        todos: todoReducer(state.todos, action)
    }
}
```

###### Store

Store is an object brings action and reducer together.

Store has the following responsibilities:

- Holds application state

- Allows access to state via `getState()`

- Allows state to be updated via `dispatch(action)`

- Registers listeners via `subscribe(listener)`

- Handles unregistering of listeners via the function returned by `subscribe(listener)`

It is easy to create a store if you have a reducer (for example the reducer from above), simply pass the reducer to `createStore()`

```js
import { createStore } from 'redux'
import reducer from './reducers'
const store = createStore(reducer)
```

You may optionally pass a second parameter to createStore as initial state

```js
const store = createStore(reducer, initialStore)
```

Dispatch action example

```js
import { addTodo } from './actions'

// optional step, this will perfome some action when state changes (e.g. logging)
const unsubscribe = store.subscribe(() => console.log(store.getState()))
// dispatch an action to add an item to todo list
store.dispatch(addTodo('Example'))
// remove subscribed
unsubscribe()
```

#### Data Flow

The data lifecycle in any Redux app follows these 4 steps:

1. Call `store.dispatch(action)`
   
   This can be called anywhere in the app, including components and XHR callbacks.

2. The Redux store calls the reducer function provided

3. The root reducer may combine the output of multiple reducers into a single state tree.

4. The Redux store saves the completed state tree returned by the root reducer.

#### Usage With React

###### Installation

React bindings are not included in Redux by default, need to install `react-redux`

###### Connect()

`connect()` can connect react component to redux by creating a wrapper component.

`connect()` can take up to 4 parameters

1. mapStateToProps
   
   If specified, the new wrapper component will subscribe to Redux store updates, anytime store is updated, `mapStateToProps` will be called.
   
   The return of `mapStateToProps` must be a plain object, which will be merged into the wrapped component's props.
   
   Example
   
   ```js
   // if redux state filter is equal to Link's prop filter then it's true, else it's false
   const mapStateToProps = (state, ownProps) => ({
       active: ownProps.filter === state.filter
   })
   
   // connect component Link to store, Link will receive prop called 'active'
   const FilterLink = connect(
       mapStateToProps
   )(Link)
   ```

2. mapDispatchToProps
   
   `mapDispatchToProps` is expected to return an object, each field of the object should be a function, calling that function is expected to dispatch an action to the store.
   
   Fields of returned object will be merged into component's props.
   
   Example
   
   ```js
   // mapDispatchToProps returns an object with a key called "onClick", the value is a function that dispatches a function with the action "setFilter" and parameter of filter in the component's props
   const mapDispatchToProps = (dispatch, ownProps) => ({
       onClick: () => dispatch(setFilter(ownProps.filter))
   })
   
   // Link will receive a prop called "onClick", calling onClick will dispatch the action above
   const FilterLink = connect(
       null,
       mapDispatchToProps
   )(Link)
   ```

3. mergeProps
   
   If specified, defines how the final props for the wrapper component is determined.
   
   By default wrapper component will receive { ...ownProps, ...stateProps, ...dispatchProps }

4. options
   
   `options` allow you to supply a custom context instance to be used by React-Redux. You need to pass the instance of your conext to both `<Provider />` and your connected component. You may pass the context to your connected component either by passing it here as a field of option, or as a prop to your connected component in rendering.
   
   - pure (__default: true__)
     
     Asusmes the wrapped component is a "pure component" and does not rely on any input or state other than its props and selected Redux store's state.
   
   - areStatesEqual __(default: strictEqual: (next, prev) => prev === next)__
     
     When pure, compare incoming store state to its previous value.
   
   - areOwnPropsEqual __(default: shallowEqual // returns true when each field of the objects is equal__
     
     When pure, compare incoming props to its previous value.
   
   - areStatePropsEqual __(default: shallowEqual)__
     
     When pure, compare the result of `mapStateToProps` to its previous value.
   
   - areMergedPropsEqual __(default: shallowEqual)__
     
     When pure, compare the result of `mergeProps` to its previous value.
   
   - forwardRef
     
     If `{forwardRef: true}` has been passed to `connect`, adding a ref to the connected wrapper component will actually return the instance of the wrapped component.

###### Provider

The `<Provider />` makes the Redux `store` available to any nested components that have been wrapped in the `connect()` function.

Since any React component in a React Redux app can be connected, most applications will render a `<Provider>` at the top level, with the entire app's component tree inside of it.

Normally you can't use a connected component unless it is nested inside a provider.

Provider can take these props:

1. store
   
   The single Redux `store` in your application.

2. children
   
   The root of your component hierarchy.

3. context
   
   You may provide a context instance. If you do so, you will need to provide the same context instance to all of your connected components as well. Failure to provide the correct context results in runtime error.

Example

```js
const store = createStore()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
```

###### connectAdvanced()

Connects React component to a Redux store, the base for `connect()` but is less opinionated about how to combine `state`, `props`, and `dispatch` into your final props. It makes no assumptions about defaults or memoization of results, leaving those responsibilities to the caller.

(Not going into any detail, if you need this you should be able to figure it out.)

Example

```js
import * as actionCreators from './actionCreators'
import { bindActionCreators } from 'redux'

function selectFactory(dispatch) {
    let ownProps = {}
    let result = {}

    const actions = bindActionCreators(actionCreators, dispatch)
    const addTodo = text => actions.addTodo(ownProps.userId, text)

    return (nextState, nextOwnProps) => {
        const todos = nextState.todos[nextOwnProps.userId]
        const nextResult = { ...nextOwnProps, todo, addTodo }
        ownProps = nextOwnProps
        if (!shallowEqual(result, nextResult)) result = nextResult
        return result
    }
}

export default connectAdvanced(selectorFactory)(TodoApp)
```

###### Async Flow

Redux store only supports _synchronous data flow_, but you can enhance `createStore()`

 with `applyMiddleware()` to express `asynchronous actions` in a convenient way.

Example of a middleware is `redux-thunk`

How to create store

```js
const INCREMENT_COUNTER = 'INCREMENT_COUNTER' // action type
```

Creating async  action

```js
function increment() { // action creator
    return {
        type: INCREMENT_COUNTER
    }
}

function incrementAsync() { // async action creator
    return dispatch => {
        setTimeout(() => {
            dispatch(increment)
        }, 1000)
    }
}

const Counter = connect( // bind as prop
    null,
    incrementAsync
)(Number)
```
