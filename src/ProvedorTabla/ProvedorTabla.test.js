import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProvedorTabla from './ProvedorTabla';

describe('<ProvedorTabla />', () => {
  test('it should mount', () => {
    render(<ProvedorTabla />);
    
    const provedorTabla = screen.getByTestId('ProvedorTabla');

    expect(provedorTabla).toBeInTheDocument();
  });
});