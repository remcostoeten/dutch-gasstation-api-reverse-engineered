'use client'

import dynamic from 'next/dynamic';
import { GasStation } from '@/core/types';

const Map = dynamic(() => import('./Map'), {
    loading: () => <p>A map is loading</p>,
    ssr: false
});

type GasStationMapProps = {
    stations: GasStation[];
};

export default function GasStationMap({ stations }: GasStationMapProps) {
    return <Map stations={stations} />;
}