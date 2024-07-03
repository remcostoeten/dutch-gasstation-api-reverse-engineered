'use client'

import { useState } from 'react';
import SearchBar from './SearchBar';
import { GasStation } from '@/core/types';

type SearchProps = {
    onSearchStart: () => void;
    onSearchEnd: (results: GasStation[]) => void;
};

export default function Search({ onSearchStart, onSearchEnd }: SearchProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async (term: string) => {
        setIsLoading(true);
        onSearchStart();
        try {
            const response = await fetch(`/api/search?term=${encodeURIComponent(term)}`);
            if (!response.ok) throw new Error('Search failed');
            const results: GasStation[] = await response.json();
            onSearchEnd(results);
        } catch (error) {
            console.error('Search error:', error);
            onSearchEnd([]); // Pass empty array on error
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="mb-6">
            <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </div>
    );
}