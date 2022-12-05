### Folder structure

similar to css

- atom, molecules are folder for components

- foundation

### Using rollup to compile react

install rollup with `yarn add --dev rollup rollup-plugin-typescript2`

at root add `rollup.config.js` files

use `rollup -c` to compile the files

### Setting up a playground

playground can be in the same monorepo as react lib as before

it can be a normal react project that imports the react lib

### Dev script for all packages

for scss `"dev": "nodemon --watch src --exec yarn build -e scss"`

for react `"dev": yarn build --watch`

for playground `"dev": "parcel src/index.html -p 3000"`

for root `"dev": "yarn lerna run dev"`

### Generating utility classes

utility classes are simple reusable classes that can be used everywhere

from the previous spacing variables, create a `Utility.scss` file that creates a width and height class for each variable

### Changing to scss

instead of using `map-get`, create a mixin and use `@include` instead


