import React from 'react';
import { render, screen } from '@testing-library/react';
import CountryList from './CountryList';

describe('CountryList', () => {
    const mockCountries = [
        { name: { official: 'Test Country 1' }, flag: '🏳️', capital: ['Test Capital 1'], cca3: 'TS1' },
        { name: { official: 'Test Country 2' }, flag: '🏴', capital: ['Test Capital 2'], cca3: 'TS2' },
    ];

    it('renders list of countries', () => {
        render(<CountryList countries={mockCountries} />);
        expect(screen.getByText('Test Country 1')).toBeInTheDocument();
        expect(screen.getByText('Test Country 2')).toBeInTheDocument();
        expect(screen.getByText('Test Capital 1')).toBeInTheDocument();
        expect(screen.getByText('Test Capital 2')).toBeInTheDocument();
    });

    it('renders "N/A" for countries without capital', () => {
        const countriesWithoutCapital = [
            { name: { official: 'No Capital Country' }, flag: '🏳️', cca3: 'NCC' },
        ];
        render(<CountryList countries={countriesWithoutCapital} />);
        expect(screen.getByText('No Capital Country')).toBeInTheDocument();
        expect(screen.getByText('Capital: N/A')).toBeInTheDocument();
    });
});
