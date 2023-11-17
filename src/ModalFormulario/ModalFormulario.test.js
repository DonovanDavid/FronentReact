import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModalFormulario from './ModalFormulario';

describe('<ModalFormulario />', () => {
  test('it should mount', () => {
    render(<ModalFormulario />);
    
    const modalFormulario = screen.getByTestId('ModalFormulario');

    expect(modalFormulario).toBeInTheDocument();
  });
});