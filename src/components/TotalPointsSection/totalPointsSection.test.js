import React from 'react';
import { render } from '@testing-library/react-native';

import { TotalPointsSection } from './index';

describe('TotalPointsSection', () => {
  it('Should display total points for Diciembre', () => {
    const totalPoints = 1000;
    const { getByText } = render(
      <TotalPointsSection totalPoints={totalPoints} />
    );

    expect(getByText('TUS PUNTOS')).toBeDefined();
    expect(getByText('Diciembre')).toBeDefined();
    expect(getByText('1,000 pts')).toBeDefined();
  });
});
