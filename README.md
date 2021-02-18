# ENUT-BO
ENUT-BO is made with React. The client side libraries are managed by Webpack and the render is processed in the client side powered by React.

## setting dev environment
Environment tools required to use this project:

    npm install -g gulp-cli

After clone this project you should install the npm packages and bower packages.

    npm install

To run the app you should use this command.

    npm start

## Testing

Run tests:

```sh
npm run test
npm run test:watch # Run in watch mode
```

Lint the code with [ESLint](https://eslint.org):

```sh
npm run lint
npm run lint:fix # Fix issues
```		

### Writing tests

When writing tests, make sure to use the following format to keep the tests clean and consistent:

```jsx
import { getByText } from "@testing-library/react";

import Button from "./Button";

describe("<Button>", () => {
  let props;
  const getComponent = () => render(Button, props);

  beforeEach(() => {
    props = {
      children: "Label"
    };
  });
  afterEach(tearDown);

  it("should render `props.children`", () => {
    const { container } = getComponent();
    getByText(container, props.children);
  });

  describe("when `props.plus` is `true`", () => {
    beforeEach(() => {
      props.plus = true;
    });

    it("renders a plus character", () => {
      const { container } = getComponent();
      getByText(container, `+ ${props.children}`);
    });
  });
});
```

#### Actions

##### Request actions example

For requests, we use the following format:

```js
export const signInRequest = (username, password) => ({type: types.SIGN_IN_REQUEST, username, password});
export const signInSuccess = token => ({type: types.SIGN_IN_SUCCESS, token});
export const signInError = error => ({type: types.SIGN_IN_ERROR, error});
```

In the UI, `signInRequest` is what's actually called. The rest of the actions, such as success and error are called by the saga.

##### Action types example

A `types.js` file is also created for the action types. This is for use in `actions.js` and its respective test file:

```js
const PREFIX = "Session/";

export const SIGN_IN_REQUEST = `${PREFIX}SIGN_IN_REQUEST`;
export const SIGN_IN_SUCCESS = `${PREFIX}SIGN_IN_SUCCESS`;
export const SIGN_IN_ERROR = `${PREFIX}SIGN_IN_ERROR`;
```

A `types.js` file should also have its own tests, to double-check no typos were made (which can happen).

### Code review

Create a pull request for any changes in the following format:

```md
# Overview

Basic overview of the changes made.

## Changes

- A more detailed list
- Of things that have changed

## How to test

1. List instructions for how to test
2. Make sure it's detailed and includes the exact steps
```

## Contribution guidelines

### Git guidelines

The repository has three primary branches:

1. `master` (production)
2. `test` (staging) (releases merged into `master`)
3. `develop` (development) (releases merged into `test`)

When you work, create one of the following branches:

#### `feat/...`

Created from `develop`, to be merged back into `develop`.

#### `fix/...`

Created from `develop`, to be merged back into `develop`.

#### `hotfix/...`

Created from `master`, to be merged back into `master`, `test`, and `develop`.

### commit messages

The commit message should has the following format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

Example:
```
fix(middleware): ensure Range headers adhere more closely to RFC 2616

Add one new dependency, use `range-parser` (Express dependency) to compute
range. It is more well-tested in the wild.

Fixes #2310
```

# Architecture

## public
This is all the client side content, the user can access this content freely.