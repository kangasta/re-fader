# re-fader

[![Build Status](https://travis-ci.org/kangasta/re-fader.svg?branch=master)](https://travis-ci.org/kangasta/re-fader)
[![Maintainability](https://api.codeclimate.com/v1/badges/d10d9a7b53ce2ddd7168/maintainability)](https://codeclimate.com/github/kangasta/re-fader/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d10d9a7b53ce2ddd7168/test_coverage)](https://codeclimate.com/github/kangasta/re-fader/test_coverage)

Fader and changer for React components. Changer fades out the old children and fades in the new children on props change.

## Installing

```bash
npm install re-fader
```

## Usage

This package provides three components: Fader, Changer, and IntervalChanger. Fader fades in and out its children. Changer fades out the previous child and fades in the new child when its children are modified. IntervalChanger loops though its childs one at a time changing the active children at specified interval.

```jsx
// Importing
import { Fader, Changer, IntervalChanger } from 're-fader';

// Fader props
<Fader scaling='xy' visibility='show'>
  Children
</Fader>

// Changer props
<Changer fadeIn scaling='xy'>
  Children
</Changer>

// IntervalChanger props
<IntervalChanger fadeIn interval='1000' scaling='xy'>
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>Go!</p>
</IntervalChanger>
```

`scaling` is one of `x`, `xy`, `y`, or `null` to disable the scaling. The letters define which coordinates should be scaled on hide and show.

`visibility` is one of `show`, `hide`, or `none`. `hide` hides the children by changing the opacity to zero and optionally scaling the content. `none` removes the component by setting its display to none.

`fadeIn` specifies if the child should be faded in on mount.

`interval` specifies the time in milliseconds between switching the active child.

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
