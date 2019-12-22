# re-fader

[![Build Status](https://travis-ci.org/kangasta/re-fader.svg?branch=master)](https://travis-ci.org/kangasta/re-fader)

Fader and changer for React components. Changer fades out the old children and fades in the new children on props change.

## Installing

```bash
npm install re-fader
```

## Usage

```jsx
// Importing
import { Fader, Changer } from 're-fader';

// Fader props
<Fader scaling='xy' visibility='show'>
  Children
</Fader>

// Changer props
<Changer scaling='xy'>
  Children
</Changer>
```

Visibility is one of `show`, `hide`, or `none`. `hide` hides the children by changing the opacity to zero and optionally scaling the content. `none` removes the component by setting its display to none.

Scaling is one of `x`, `xy`, `y`, or `null` to disable the scaling. The letters define which coordinates should be scaled on hide and show.

## Testing

For linting and unit tests, run:

```bash
# Linting
npm run lint
npm run lint -- --fix

# Unit tests
npm test
npm test -- --verbose --coverage
```
