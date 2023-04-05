import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { MovementSection } from './index';
import { NavigationContainer } from '@react-navigation/native';

const filteredProducts = [
  {
    id: '1',
    product: 'Product 1',
    image: 'https://example.com/image1.jpg',
    createdAt: '2022-04-01T09:00:00Z',
    points: 100,
    is_redemption: false,
  },
  {
    id: '2',
    product: 'Product 2',
    image: 'https://example.com/image2.jpg',
    createdAt: '2022-04-02T10:00:00Z',
    points: -50,
    is_redemption: true,
  },
];

describe('MovementSection', () => {
  it('should render a title and a list of items', () => {
    const { getByText, getByTestId } = render(
      <NavigationContainer>
        <MovementSection filteredProducts={filteredProducts} />
      </NavigationContainer>
    );

    const title = getByText('TUS MOVIMIENTOS');
    expect(title).toBeDefined();
    const list = getByTestId('movement-list');
    expect(list).toBeDefined();
    expect(list.props.data.length).toBe(2);
  });
});
