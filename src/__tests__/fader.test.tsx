import React from 'react';
import { render, screen } from '@testing-library/react';

import { Fader, FaderProps } from '../index';

it('shows children by default', (): void => {
  render(<Fader>Test</Fader>);
  expect(screen.getByText('Test')).toHaveStyle('opacity: 1');
});
it('hides children when specified', (): void => {
  render(<Fader visibility="hide">Test</Fader>);
  expect(screen.getByText('Test')).toHaveStyle('opacity: 0');
});
it('does not diplay children when specified', (): void => {
  render(
    <Fader visibility="none" scaling="xy">
      Test
    </Fader>
  );
  expect(screen.getByText('Test')).toHaveStyle('display: none');
});
[
  { visibility: 'show', scaling: 'xy', scaleStr: '1, 1' },
  { visibility: 'hide', scaling: 'x', scaleStr: '0, 1' },
  { visibility: 'hide', scaling: 'xy', scaleStr: '0, 0' },
  { visibility: 'hide', scaling: 'y', scaleStr: '1, 0' }
].forEach(({ scaleStr, ...props }) => {
  it(`scales children as specified (${props.visibility}, ${props.scaling})`, (): void => {
    render(<Fader {...(props as FaderProps)}>Test</Fader>);
    expect(screen.getByText('Test')).toHaveStyle(
      `transform: scale(${scaleStr})`
    );
  });
});
it('allows defining the transition time', (): void => {
  render(<Fader transitionTime={500}>Test</Fader>);
  expect(screen.getByText('Test')).toHaveStyle(`transition: all 500ms`);
});
