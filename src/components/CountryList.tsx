import React from 'react';
import { Country } from '../types';

interface CountryListProps {
    countries: Country[];
}

const CountryList: React.FC<CountryListProps> = ({ countries }) => {
    return (
        <ul className="space-y-4">
            {countries.map((country, index) => (
                <li key={country.cca3} className="country-item border p-4 rounded" style={{animationDelay: `${index * 0.1}s`}}>
                    <h2 className="text-xl font-bold">
                        {country.flag} {country.name.official}
                    </h2>
                    <p>Capital: {country.capital?.join(', ') || 'N/A'}</p>
                </li>
            ))}
        </ul>
    );
};

export default CountryList;
