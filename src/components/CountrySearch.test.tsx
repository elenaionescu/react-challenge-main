import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from 'react-query';
import CountrySearch from './CountrySearch';
import { fetchCountries } from '../utils/api';

jest.mock('../utils/api');

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('CountrySearch', () => {
    it('renders search input and button', () => {
        render(<CountrySearch />, { wrapper });
        expect(screen.getByPlaceholderText(/Search for a country/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument();
    });

    it('fetches and displays countries when search is performed', async () => {
        const mockCountries = [
            { name: { official: 'Test Country' }, flag: '🏳️', capital: ['Test Capital'], cca3: 'TST' },
        ];
        (fetchCountries as jest.Mock).mockResolvedValue(mockCountries);

        render(<CountrySearch />, { wrapper });

        const input = screen.getByPlaceholderText(/Search for a country/i);
        const button = screen.getByRole('button', { name: /Search/i });

        userEvent.type(input, 'test');
        userEvent.click(button);

        await waitFor(() => {
            expect(screen.getByText('Test Country')).toBeInTheDocument();
            expect(screen.getByText('Test Capital')).toBeInTheDocument();
        });
    });
});
