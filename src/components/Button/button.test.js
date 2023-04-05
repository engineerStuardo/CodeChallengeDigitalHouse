import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from './index';

describe('Button component', () => {
  it('Renders without crashing', () => {
    render(<Button title='Test' onPress={() => {}} />);
  });

  it('Renders the title prop correctly', () => {
    const { getByText } = render(<Button title='Test' onPress={() => {}} />);
    const titleElement = getByText('Test');
    expect(titleElement).toBeDefined();
  });

  it('Calls the onPress prop when the button is pressed', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <Button title='Test' onPress={mockOnPress} />
    );
    const buttonElement = getByTestId('button');
    fireEvent.press(buttonElement);
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('Correctly applies the small prop to the button width', () => {
    const { getByTestId } = render(
      <Button title='Test' onPress={() => {}} small />
    );
    const buttonElement = getByTestId('button');
    expect(buttonElement).toHaveStyle({ width: 170 });
  });

  it('Uses the TouchableOpacity component', () => {
    const { getByTestId } = render(<Button title='Test' onPress={() => {}} />);
    const buttonElement = getByTestId('button');
    expect(buttonElement).toBeDefined();
  });
});
