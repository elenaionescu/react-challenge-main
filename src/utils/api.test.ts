import { fetchCountries } from './api';

global.fetch = jest.fn();

describe('fetchCountries', () => {
    it('fetches countries successfully', async () => {
        const mockCountries = [{ name: { official: 'Test Country' }, flag: '🏳️', capital: ['Test Capital'], cca3: 'TST' }];
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => mockCountries,
        });

        const result = await fetchCountries('test');
        expect(result).toEqual(mockCountries);
        expect(global.fetch).toHaveBeenCalledWith('https://restcountries.com/v3.1/name/test');
    });

    it('throws an error when fetch fails', async () => {
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
        });

        await expect(fetchCountries('test')).rejects.toThrow('Failed to fetch countries');
    });
});
