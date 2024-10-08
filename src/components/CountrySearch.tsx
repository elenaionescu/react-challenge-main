import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchCountries } from '../utils/api';
import SearchInput from './SearchInput';
import CountryList from './CountryList';

const CountrySearch: React.FC = () => {
    const [search, setSearch] = useState('');

    const { data: countries, error, isLoading, refetch } = useQuery(
        ['countries', search],
        () => fetchCountries(search),
        { enabled: false }
    );

    const handleSearch = () => {
        if (search.trim()) {
            refetch();
        }
    };

    return (
        <div>
            <SearchInput
                value={search}
                onChange={setSearch}
                onSearch={handleSearch}
            />
            {isLoading && <div className="loading-spinner mx-auto"></div>}
            {error && <p className="text-red-500">Error: {(error as Error).message}</p>}
            {countries && <CountryList countries={countries} />}
        </div>
    );
};

export default CountrySearch;
