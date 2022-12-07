### Publish to npm with lerna

normally you can publish with `npm publish`, but since this is a monorepo with multiple packages, it is a bit different

in the `package.json` file of each package you want to publish, add a publishConfig

```json
"publishConfig": {
    "access": "public"
}
```

for other packages add private to `package.json`

```json
"private": true
```

to publish run `yarn lerna publish`

it is recommended to add a script like `yarn test && yarn build && yarn lerna publish`  to make sure everything works before publishing

### Controlling what files to publish

in `package.json`, add `files`

```json
"files": [
    "lib"
]
```

this tells npm to publish the lib folder and not other files

### Conventional commits

conventional commit is a method to make sure all devs follow the same commit format

install using `yarn add --dev commitizen cz-conventional-changelog -W` (-W tells yarn to add it to root package)

in `package.json` of root package add commitizen config

```json
"config": {
    "commitizen": {
        "path": "cz-conventional-changelog"
    }
}
```

commit using `yarn cz-git`

### Lint for commits

install dependencies with `yarn add --dev @commitlint/cli @commitlint/config-conventional husky -W`

create `commitlint.config.js` files on root

in `package.json` add husky config

```json
"husky": {
    "hooks": {
        "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
}
```

now husky will listen for `commit-msg` hook and run `commitlint` on the commit user created to make sure it follows the conventional commit

### Generate changelogs with lerna

in `lerna.json` file add command

```json
"command": {
    "publish": {
        "conventionalCommits": true
    }
}
```

now after you publish, a `CHANGELOG.md` file will be generated automatically, and this file will contain all the changes you have made


