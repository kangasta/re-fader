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
