### Setting up github action

to use github action, create a `.github/workflow` folder

create a `.yml` format file, eg. ci.yml

```yml
name: Build & Test CI

on:
    push:
        branches:
            - master
    pull_request:
        branches:
            - master

jobs:
    builds:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v2

            - name: Install dependencies
              run: yarn
            - name: Build packages
              run: yarn build
            - name: Automated tests
              run: yarn test
            - name: Visual regression tests
              env:
                CHROMATIC_PROJECT_TOKEN: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
              run: yarn test:chromatic
```

this tells github to run on push and pull request to master branch

the environment will be `ubuntu-latest`,  it checks out code first, then installs dependencies, then runs build, then runs tests, and run chromatic tests

### Creating github secret

instead of hardcoding secrets in places like `packages.json` file, when you are using github actions you can create a secret on github under settings of your repo

for example the secret you created is `CHROMATIC_PROJECT_TOKEN`, you can use it in github actions like

```json
env:
    CHROMATIC_PROJECT_TOKEN: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
```

in the `package.json` file you originally had the secret, change it to use environment variable

```json
"test:chromatic": "chromatic --project-token=\"$CHROMATIC_PROJECT_TOKEN\"""
```

### Deploy storybook to netlify

first add a script for netlify, which builds the project and storybook

```json
"build:storybook": "yarn build && yarn lerna build-storybook"
```

on netlify, click get new app from git, search for you repo, select the correct branch and add the build command

for publish directory, put the storybook build path, in this case `packages/react/storybook-static`

then click deploy


