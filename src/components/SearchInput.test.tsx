import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchInput from './SearchInput';

describe('SearchInput', () => {
    it('renders input and button', () => {
        render(<SearchInput value="" onChange={() => {}} onSearch={() => {}} />);
        expect(screen.getByPlaceholderText(/Search for a country/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument();
    });

    it('calls onChange when input value changes', () => {
        const mockOnChange = jest.fn();
        render(<SearchInput value="" onChange={mockOnChange} onSearch={() => {}} />);
        const input = screen.getByPlaceholderText(/Search for a country/i);
        userEvent.type(input, 'test');
        expect(mockOnChange).toHaveBeenCalledWith('test');
    });

    it('calls onSearch when button is clicked', () => {
        const mockOnSearch = jest.fn();
        render(<SearchInput value="" onChange={() => {}} onSearch={mockOnSearch} />);
        const button = screen.getByRole('button', { name: /Search/i });
        userEvent.click(button);
        expect(mockOnSearch).toHaveBeenCalled();
    });
});
