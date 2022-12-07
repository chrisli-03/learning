### Setting up babel and jest

install babel and jest with`yarn add --dev jest @types/jest @babel/preset-env @babel/preset-typescript @babel/preset-react @testing-library/react @testing-library/jest-dom`

create a `jest.config.js` file, this is config jest will use

create a `jest.setup.ts` file, this will be the file jest runs before test starts

create a `babel.config.js` file, this is config babel will use

creating test files for each component, for component Select the file would be `Select.test.tsx`

in `package.json` add test scripts

```json
"test": "jest --verbose"
"test:watch": "yarn test --watch"
```

### Testing foundation package

you can use snapshot test to watch for any unintentional changes in foundation package

### Global config

for configs like babel, you could hoist it to root directory and then import it in different packages
