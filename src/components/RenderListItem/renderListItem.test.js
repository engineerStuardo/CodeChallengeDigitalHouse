import React from 'react';
import 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import { RenderListItem } from './index';
import { useNavigation } from '@react-navigation/native';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

const navigate = jest.fn();
useNavigation.mockImplementation(() => ({ navigate }));

describe('RenderListItem', () => {
  it('Should render an item with the correct information', async () => {
    const product = 'Product 1';
    const image = 'https://example.com/image1.jpg';
    const createdAt = '2022-04-01T09:00:00Z';
    const points = 100;
    const isRedemption = false;
    const date = '1 de abril, 2022';

    const { getByText, getByTestId } = render(
      <RenderListItem
        product={product}
        image={image}
        createdAt={createdAt}
        points={points}
        isRedemption={isRedemption}
      />
    );

    const productText = getByText(product);
    expect(productText).toBeDefined();

    const dateText = getByText(date);
    expect(dateText).toBeDefined();

    const simbol = getByText('+');
    expect(simbol).toBeDefined();

    const pointText = getByText(points.toString());
    expect(pointText).toBeDefined();

    const imageComponent = getByTestId('arrow-image');
    expect(imageComponent.props.source).toEqual(
      require('../../../assets/Subtract.png')
    );

    fireEvent.press(getByTestId('item-card'));
    expect(useNavigation).toHaveBeenCalled();
    expect(navigate).toHaveBeenCalledWith('Details', {
      product,
      image,
      date,
      points,
    });
  });
});
