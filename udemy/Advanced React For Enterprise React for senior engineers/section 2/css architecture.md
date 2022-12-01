### What we'll build

In general, a component like `Button` will have a default style that is imported by the component/page using `Button`, and the component/page can have its own style overwriting some default styles like `color`.

### CSS architecture checklist

- organised - fixed code structure

- no specificity issues

- atomic design principles

- easy to understand (comments, variables)

- fully customizable/themeable

- reusable across teams/projects

### Folder and file structures

- fondation: this folder contains the style guide, usually from a designer, can include color, typography, variables, mixins, etc.

- atoms, molecules, organisms: these folders are for components based on the complexity, atoms make up molecules make up organisms

- _global.scss file imports the foundations, bases, and any default styles

- base: this folder has the css reset and default css variables

### Forcing code style with stylelint and prettier

install stylelint and prettier with `yarn add --dev stylelint stylelint-config-sass-guidelines stylelint-config-prettier stylelint-prettier prettier`

setup stylelint with `.stylelintrc.json` file

```json
{
    "plugins": ["stylelint-prettier"]
    "extends": [
        "stylelint-config-sass-guidelines",
        "stylelint-config-prettier",
        "stylelint-prettier/recommended"
    ]
}
```

package.json script

```json
"scripts": {
    "lint": "stylelint './**/*.scss'",
    "lint:fix": "yarn lint --fix"
}
```

### Run command before commit with pre-commit hooks

install husky with `yarn add --dev husky lint-staged`

package.json config

```json
"husky": {
    "hooks": {
        "pre-commit": "lint-staged"
    }
}
"lint-staged": {
    "*.scss": "yarn lint:fix"
}
```

### Compile scss to css

install node-sass with `yarn add --dev node-sass`

create a script to ingest all the scss and compile them to css using node sass

*note: this is only one method to do the convertion*


