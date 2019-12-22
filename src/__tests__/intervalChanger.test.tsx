import React from 'react';
import { act, render, screen } from '@testing-library/react';

import { IntervalChanger } from '../index';

it('changes active children with specified interval', async () => {
  render(
    <IntervalChanger interval={1000}>
      <div>1</div>
      <div>2</div>
    </IntervalChanger>
  );

  expect(screen.queryByText('1')).toBeTruthy();
  expect(screen.queryByText('2')).toBeFalsy();

  act(() => {
    jest.advanceTimersByTime(1500);
  });

  expect(screen.queryByText('2')).toBeTruthy();
  expect(screen.queryByText('1')).toBeFalsy();

  act(() => {
    jest.advanceTimersByTime(1500);
  });

  expect(screen.queryByText('1')).toBeTruthy();
  expect(screen.queryByText('2')).toBeFalsy();
});
