import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Home } from './index';
import { useHome } from '../../hooks/useHome';

jest.mock('../../hooks/useHome');

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('Home component', () => {
  it('renders correctly', () => {
    useHome.mockReturnValue({
      totalPoints: 1000,
      filteredProducts: [
        {
          product: 'Product 1',
          image: 'https://example.com/image1.jpg',
          createdAt: '2022-04-01T12:00:00Z',
          points: 100,
        },
      ],
      filter: jest.fn(),
      showAll: jest.fn(),
    });

    const { getByText } = render(<Home />);

    expect(getByText('TUS PUNTOS')).toBeDefined();
    expect(getByText('Diciembre')).toBeDefined();
    expect(getByText('Product 1')).toBeDefined();
  });

  it('calls showAll when the "Todos" button is pressed', () => {
    const mockFilter = jest.fn();

    useHome.mockReturnValue({
      totalPoints: 1000,
      filteredProducts: [
        {
          product: 'Product 1',
          image: 'https://example.com/image1.jpg',
          createdAt: '2022-04-01T12:00:00Z',
          points: 100,
        },
      ],
      filter: mockFilter,
      showAll: true,
    });

    const { getByTestId } = render(<Home />);

    fireEvent.press(getByTestId('todos-button'));
    expect(mockFilter).toHaveBeenCalled();
  });
});
