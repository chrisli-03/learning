prerequisite
#### create a npm project with webpack
1. install nodejs
2. create npm project with `npm init -y`
3. install webpack with `npm i -D webpack webpack-cli`
4. create `webpack.config.js` on root directory

#### adding typescript
1. install typescript with `npm i -D typescript ts-loader`
2. update `webpack.config.js` with entry, output
webpack.config.js
```
module.exports = {
    entry: './src/index.ts', // load src/index.ts file for bundling
    output: {
        path: './dist', // output bundled file to dist folder
        filename: 'bundle.js' // use bundle.js as bundled filename
    }
},
// the modules webpack should use for bundling
module: {
    // set of rules to tell webpack what to use for what file
    rules: [
        {
            test: /\.ts/, // if filename matches .ts
            use: 'ts-loader', // use ts-loader, which is the webpack loader for typescript
            exclude: /node-modules/ // exclude node-modules directory
        }
    ]
}
```
4. create `tsconfig.json` on root directory
tsconfig.json
```
{
    "compilerOptions": {
        "module": "ES2015",
        "target": "ES2015",
        "strict": true
    }
}
```
5. in `package.json` file, add script `"build": "webpack"`
package.json
```
...
"scripts": {
    ...
    "build": "webpack"
}
...
```

#### bundling
1. add any typescript file in src directory
2. run `npm run build` to generate a bundled file