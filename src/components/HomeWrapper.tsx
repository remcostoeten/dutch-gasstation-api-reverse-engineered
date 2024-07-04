'use client'

import { useState } from 'react';
import Search from './search/Search';
import GasStationList from './GasStationList';
import GasStationMap from './GasStationMap';
import { GasStation } from '@/core/types';
import PushButton from './SentPushNotificationt';

type HomeWrapperProps = {
    initialStations: GasStation[];
};

export default function HomeWrapper({ initialStations }: HomeWrapperProps) {
    const [stations, setStations] = useState(initialStations);
    const [isSearching, setIsSearching] = useState(false);

    return (
        <>
            <PushButton />            <Search
                onSearchStart={() => setIsSearching(true)}
                onSearchEnd={(results) => {
                    setStations(results);
                    setIsSearching(false);
                }}
            />
            {isSearching ? (
                <div className="h-96 flex items-center justify-center">Searching...</div>
            ) : (
                <>
                    <GasStationMap stations={stations} />
                    <GasStationList stations={stations} />
                </>
            )}
        </>
    );
}