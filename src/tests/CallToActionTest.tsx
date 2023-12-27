import React from 'react';
import { render, screen } from '@testing-library/react';
import CallToAction from '../components/CallToAction';

test('renders button with correct color', () => {
  render(<CallToAction />);
  const button = screen.getByRole('button', { name: /Install Sweep/i });
  expect(button).toHaveStyle('background-color: green.400');
  expect(button).toHaveStyleRule('background-color', 'green.700', {
    modifier: ':hover',
  });
});
