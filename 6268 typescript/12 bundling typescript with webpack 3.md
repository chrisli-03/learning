#### babel
babel is a transcompiler that converts es2015+ code into backwards compatible version of javascript code that can be run by older javascript engines.
for example arrow function to normal function

prerequisite
1. installing babel with `npm i -D @babel/core @babel/preset-env babel-loader core-js`
- @babel/core, is the node API that allow babel to run
- @babel/preset-env, babel on its own does not do anything, it needs plugins to do the transformation, such as `@babel/plugin-transform-arrow-functions`, a preset is a bundle of commonly used babel plugins. other presets are like `@babel/preset-flow`, `@babel/preset-react`, `@babel/preset-typescript`, or you could create your own preset
- babel-loader, this plugin allows webpack to transpile files using babel
- core-js, is a modularized set of polyfills, although can be used with babel its not bounded together, also works independently

difference between babel and core-js
babel transpiles the syntax, like let/const to var
core-js polyfills features like Promise

2. adding babel-loader to `webpack.config.json` module.rules
webpack.config.json
```
...
modules: {
    rules: [
        {
            test: \/.ts$/,
            use: [
                /*
                    note: loaders are run from bottom to top, this part means file will be compiled by ts-loader to transform to js first, then transpiled by babel
                */
                {
                    loader: 'babel-loader',
                    options: { // can also use a separate babel config file
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    targets: {
                                        "chrome": "88" // target browser to compatible with
                                    },
                                    "corejs": "3" // corejs version to use
                                    "useBuiltIns": "usage" // how to use corejs, "usage" means only import the used methods
                                }
                            ]
                        ]
                    }
                },
                'ts-loader'
            ]
        }
    ]
}
```

3. adding `environment` to `webpack.config.js` output config
the reason for this is the code webpack itself generate may still not be browser compatible, like new version of webpack uses arrow functions
the following config tells webpack to not use arrow function when generating bundle
webpack.config.js
```
module.exports = {
    ...
    outputs: {
        ...
        environment: {
            arrowFunction: false
        }
    }
}
```