import React from 'react';
import { render } from '@testing-library/react-native';
import { Header } from './index';

describe('Header component', () => {
  it('renders the welcome message', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Bienvenido de vuelta!')).toBeTruthy();
  });

  it('renders the user name', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Ruben Rodriguez')).toBeTruthy();
  });
});
