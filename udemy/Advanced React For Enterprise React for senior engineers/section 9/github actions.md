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


