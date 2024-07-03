'use client'

import { useState, FormEvent } from 'react';

type SearchBarProps = {
    onSearch: (term: string) => void;
    isLoading: boolean;
};

export default function SearchBar({ onSearch, isLoading }: SearchBarProps) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            onSearch(searchTerm.trim());
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center">
            <div className="relative flex-grow">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search gas stations..."
                    className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled={isLoading}
                />
                {isLoading && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                )}
            </div>
            <button
                type="submit"
                className={`px-4 py-2 text-white bg-blue-500 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
                    }`}
                disabled={isLoading}
            >
                Search
            </button>
        </form>
    );
}