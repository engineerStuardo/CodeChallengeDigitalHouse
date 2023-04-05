import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ButtonBottomSection } from './index';

const filterMock = jest.fn();

describe('ButtonBottomSection', () => {
  it('Renders without crashing', () => {
    render(<ButtonBottomSection filter={filterMock} showAll={false} />);
  });

  it('Renders "Todos" button when showAll prop is true', () => {
    const { getByTestId } = render(
      <ButtonBottomSection filter={filterMock} showAll={true} />
    );
    const todosButton = getByTestId('todos-button');
    expect(todosButton).toBeTruthy();

    fireEvent.press(todosButton);
    expect(filterMock).toHaveBeenCalledWith('Todos');
  });

  it('Renders "Ganados" and "Canjeados" buttons when showAll prop is false', () => {
    const { getByTestId } = render(
      <ButtonBottomSection filter={filterMock} showAll={false} />
    );
    const ganadosButton = getByTestId('ganados-button');
    const canjeadosButton = getByTestId('canjeados-button');

    expect(ganadosButton).toBeTruthy();
    expect(canjeadosButton).toBeTruthy();

    fireEvent.press(ganadosButton);
    expect(filterMock).toHaveBeenCalledWith('Ganados');

    fireEvent.press(canjeadosButton);
    expect(filterMock).toHaveBeenCalledWith('Canjeados');
  });
});
