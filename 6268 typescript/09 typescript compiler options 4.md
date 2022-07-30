alwaysStrict - ensure 'use strict' is always emitted
note if your file is a module (with import or export) strict mode is enabled on default, so emitted file will not have 'use strict'
```
compilerOptions: {
    // default value is false
    alwaysStrict: true // the emitted js file will have 'use strict'
}
```

noImplicitAny - implicit type any will result in error
```
compilerOptions: {
    // default value is false
    noImplicitAny: true
}

let b; // error, b is not assigned a type, resulting in its type being any
```

noImplicitThis - this with implicit type any will result in error
```
compilerOptions: {
    // default value is false
    noImplicitThis: true
}

function foo() {
    alert(this); // error, this is not assigned a type, resulting in its type being any
}

function foo(this: Window) {
    alert(this); // ok, because this is type Window
}
```

strictNullChecks - when type checking, consider null and undefined
```
compilerOptions: {
    // default value is false
    strictNullChecks: true
}

let button = document.getElementById('button');
button.addEventListener('click', function foo() {}); // error, because element with id button might not exist and button could be null

let button = document.getElementById('button');
button?.addEventListener('click', function foo() {}); // ok, because theres a check on button before adding event listener
```

strict - enable all strict type-checking options
```
compilerOptions: {
    strict: true
}
```

there are more configs not covered here
