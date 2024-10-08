import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders country search heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/Country Search/i);
    expect(headingElement).toBeInTheDocument();
});
