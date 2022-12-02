### Monorepository

monorepository puts all packages that depends on each other in the same repository

install lerna with `yarn add --dev lerna`

create a lerna repository with `yarn lerna init`, this should create `lerna.json` file

in the root `package.json` file add `"private": true` so yarn knows its a private package, used to manage the packages and not for publish

then in root `package.json` add the workspaces

```json
"workspaces": {
    "packages": [
        "packages/*"
    ]
}
```

in order to use yarn, in `lerna.json` file add

```json
"npmClient": "yarn",
"useWorkspaces": true,
"stream": true // show some good logs
```

you can run scripts on all packages by using command `yarn lerna run build`, which will run `yarn run build` on all packages

to prevent some dependancies from hoisting to root directory, add "nohoist" to  root`package.json` file

package.json

```json
"workspaces": {
    ...
    "nohoist": {
        "**/normalize-scss"
    }
}
```
