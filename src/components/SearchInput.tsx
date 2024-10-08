import React from 'react';

interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
    onSearch: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, onSearch }) => {
    return (
        <div className="flex mb-4">
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search for a country..."
                className="flex-grow p-2 border border-gray-300 rounded-l focus-ring"
                aria-label="Search for a country"
            />
            <button
                onClick={onSearch}
                className="bg-blue-500 text-white p-2 rounded-r focus-ring"
                aria-label="Search"
            >
                Search
            </button>
        </div>
    );
};

export default SearchInput;
