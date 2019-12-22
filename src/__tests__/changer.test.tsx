import React from 'react';
import { act, render, screen } from '@testing-library/react';

import { Changer } from '../index';

it('changes content after childrens change', async () => {
  const container = render(<Changer>Test</Changer>);
  expect(screen.getByText('Test')).toHaveStyle('opacity: 1');

  act(() => {
    container.rerender(<Changer>Update</Changer>);
  });

  expect(screen.getByText('Test')).toHaveStyle('opacity: 0');

  act(() => {
    jest.runOnlyPendingTimers();
  });

  await screen.findByText('Update');
  expect(screen.getByText('Update')).toHaveStyle('opacity: 1');
});
it('fades in component if specified', () => {
  render(<Changer fadeIn>Test</Changer>);
  expect(screen.queryByText('Test')).toBeFalsy();

  act(() => {
    jest.runOnlyPendingTimers();
  });

  expect(screen.getByText('Test')).toHaveStyle('opacity: 1');
});
it('allows defining the transition time', (): void => {
  const container = render(<Changer transitionTime={500}>Test</Changer>);
  expect(screen.queryByText('Test')).toBeTruthy();

  container.rerender(<Changer transitionTime={500}>Update</Changer>);

  act(() => {
    jest.advanceTimersByTime(450);
  });

  expect(screen.queryByText('Test')).toBeTruthy();
  expect(screen.queryByText('Update')).toBeFalsy();

  act(() => {
    jest.advanceTimersByTime(100);
  });

  expect(screen.queryByText('Test')).toBeFalsy();
  expect(screen.queryByText('Update')).toBeTruthy();
});
