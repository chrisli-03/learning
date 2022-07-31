some useful webpack plugins
#### html-webpack-plugin
what `html-webpack-plugin` does is it automatically injects the generated bundled file to a targeted html file

prerequisite
1. install `npm i -D html-webpack-plugin`
2. adding to `webpack.config.js` plugin section
webpack.config.js
```
const HTMLWebpackPlugin = require('html-webpack-plugin');

export.modules = {
    ...
    plugins: [
        ...
        new HTMLWebpackPlugin()
    ]
}
```
3. use optional configs like title, template, etc.

#### webpack-dev-server
what `webpack-dev-server` does is it allows you to start a server to host the webpack project with features like live reloading, hot module replacement, etc.

prerequisite
1. install `npm i -D webpack-dev-server`
2. add script `"start": "webpack server --open chrome.exe"` to `package.json` file
package.json
```
...
"script": {
    ...
    "start": "webpack server --open chrome.exe"
}
```

#### clean-webpack-plugin
what `clean-webpack-plugin` does is it clears the output directory before generating the bundled file

prerequisite
1. install `npm i -D clean-webpack-plugin`
2. adding to `webpack.config.js` plugin section

webpack.config.js
```
const CleanWebpackPlugin = require('clean-webpack-plugin');

export.modules = {
    ...
    plugins: [
        new CleanWebpackPlugin(), // usually this is the first plugin to run
        ...
    ]   
}
```

some useful webpack configs
#### resolve
what `resolve` does is it tells webpack what files can be imported as a module
webpack.config.js
```
module.exports = {
    ...
    resolve: {
        // this tells webpack .ts and .js files can be imported as module, without this if you try to import a .ts file webpack will throw an error
        extensions: ['.ts', '.js']
    }
}
```