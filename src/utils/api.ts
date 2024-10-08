import { Country } from '../types';

export const fetchCountries = async (search: string): Promise<Country[]> => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${search}`);
    if (!response.ok) {
        throw new Error('Failed to fetch countries');
    }
    return response.json();
};
