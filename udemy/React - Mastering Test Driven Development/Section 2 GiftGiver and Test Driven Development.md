##### Example of script to install Jest and Enzyme

`npm install enzyme jest-cli@20.0.4 --save-dev`

##### Snapshot

A snapshot test will compare a previous snapshot taken with the current snapshot, if the two snapshots does not match, either there was an unexcepted change or snapshot needs to be updated

##### What to test

1. snapshot

2. state

3. dom

4. user events

##### Behaviour driven development

given, when, then

ie. given notes, when deleting, then remove a note

bdd consists of senarios/specifications

##### Describe vs it

describe is for grouping tests together, it is an individual test

describe can be nested to create subgroups

##### Ignoring certain files

files like index.js that only imports and run functions imported from other modules can usually be safely ignored

in package.json add a config to indicate what files to test

```json
"jest": {
    "collectCoverageFrom": [
        "src/**/*.js",
        "src/index.js"
    ]
}
```


