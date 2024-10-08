/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import CountrySearch from './components/CountrySearch';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

const queryClient = new QueryClient();

const App: React.FC = () => {
    return (
        <ErrorBoundary>
            <QueryClientProvider client={queryClient}>
                <div className="container mx-auto p-4">
                    <h1 className="text-3xl font-bold mb-4">Country Search</h1>
                    <CountrySearch />
                </div>
            </QueryClientProvider>
        </ErrorBoundary>
    );
};

export default App;
