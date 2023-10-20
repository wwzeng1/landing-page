import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Testimonials from './Testimonials';

describe('Testimonials', () => {
  test('generates correct initials for single word name', () => {
    render(<Testimonials name="Single" />);
    const initials = screen.getByText('S');
    expect(initials).toBeInTheDocument();
  });

  test('generates correct initials for two word name', () => {
    render(<Testimonials name="Two Words" />);
    const initials = screen.getByText('TW');
    expect(initials).toBeInTheDocument();
  });

  test('generates correct initials for name with more than two words', () => {
    render(<Testimonials name="More Than Two Words" />);
    const initials = screen.getByText('MT');
    expect(initials).toBeInTheDocument();
  });

  test('generates correct initials for name with special characters', () => {
    render(<Testimonials name="Special$ Characters!" />);
    const initials = screen.getByText('SC');
    expect(initials).toBeInTheDocument();
  });
});
