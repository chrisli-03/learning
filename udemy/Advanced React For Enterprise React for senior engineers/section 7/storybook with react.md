### Setting up storybook

install storybook with `yarn add --dev @storybook/react babel-loader`

create a `.storybook` folder, then create a `main.js` file in it, this file tells storybook where to find stories, what addons to use, etc.

for storybook to understand typescript, install typescript preset `yarn add --dev @storybook/preset-typescript`

in `packages.json` add storybook script

```json
"start-storybook": "start-storybook",
"build-storybook": "build-storybook"
```

add story for components, for example component Select will have filename `Select.story.tsx`

### Knobs

install knobs with `yarn add --dev @storybook/addon-knobs` (also add it to `.storybook/main.js`)

in stories you can use `text`, `select`, etc. from knobs to change the props so user can test different values

### Accessibility

install accessibility with `yarn add --dev @storybook/a11y` (also add it to `.storybook/main.js`)

in stories you can use `withA11Y` in default export as decorator, and storybook will show any accessibility issues

### Chromatic

chromatic is for checking visual changes

install chromatic with `yarn add -dev chromatic`

then you can publish storybook to chromatic with the command chromatic provided

for issues like wrong color, unit test wont be able to catch but chromatic can


