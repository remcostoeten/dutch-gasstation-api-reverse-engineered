import { GasStation } from '@/core/types';

type GasStationListProps = {
    stations: GasStation[];
};

export default function GasStationList({ stations }: GasStationListProps) {
    return (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stations.map((station) => (
                <div key={`${station.name}-${station.location.coordinates.latitude}-${station.location.coordinates.longitude}`} className="p-4 bg-white rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold">{station.name}</h3>
                    <p className="text-gray-600">{station.location.address.city}, {station.location.address.province}</p>
                    <p className="mt-2 text-2xl font-bold text-green-600">€{station.fuel.fuelPrice.toFixed(2)}</p>
                    <p className="text-sm text-gray-500">Last updated: {new Date(station.fuel.lastUpdated).toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
}