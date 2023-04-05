import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Details } from './index';

describe('Details', () => {
  it('displays product details correctly', () => {
    const product = 'Product 1';
    const image = 'https://example.com/image1.jpg';
    const date = '1 de abril, 2022';
    const points = 100;

    const { getByText, getByTestId } = render(
      <Details
        route={{
          params: { product, image, date, points },
        }}
      />
    );

    expect(getByText(product)).toBeTruthy();
    expect(getByText(`Comprado el ${date}`)).toBeTruthy();
    expect(getByText(`${points.toLocaleString()} puntos`)).toBeTruthy();
    expect(getByTestId('product-image')).toHaveProp('source', { uri: image });
    expect(getByTestId('accept-button')).toBeTruthy();
  });

  it('navigates back to home screen when accept button is pressed', () => {
    const navigation = { navigate: jest.fn() };
    const { getByTestId } = render(
      <Details
        navigation={navigation}
        route={{
          params: {
            product: 'Product 1',
            image: 'https://example.com/image1.jpg',
            date: '1 de abril, 2022',
            points: 100,
          },
        }}
      />
    );

    const buttonElement = getByTestId('accept-button');
    fireEvent.press(buttonElement);
    expect(navigation.navigate).toHaveBeenCalledWith('Home');
  });
});
