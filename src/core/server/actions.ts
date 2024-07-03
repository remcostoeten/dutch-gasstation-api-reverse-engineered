'use server'

import { GasStation } from "@/core/types"

type GasStationsResponse = {
    gasStations: GasStation[]
}

const API_BASE_URL = 'https://www.independer.nl/api/autoverzekering/gasstation/getgasstations';

export async function getGasStations(
    addressInformation: string = '',
    fuelType: number = 2,
    range: number = 200,
    sorting: number = 1
): Promise<GasStation[]> {
    const params = new URLSearchParams({
        v: '61',
        fuelType: fuelType.toString(),
        range: range.toString(),
        sorting: sorting.toString(),
    });

    if (addressInformation) {
        params.append('addressInformation', addressInformation);
    }

    const API_URL = `${API_BASE_URL}?${params.toString()}`;

    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const data: GasStationsResponse = await response.json();
    return data.gasStations;
}

export async function getMultipleCitiesGasStations(): Promise<GasStation[]> {
    const cities = ['Amsterdam', 'Rotterdam', 'Utrecht', 'Groningen', 'Maastricht'];
    const allStations: GasStation[] = [];

    for (const city of cities) {
        const stations = await getGasStations(city);
        allStations.push(...stations);
    }

    return Array.from(new Set(allStations.map(s => `${s.name}-${s.location.coordinates.latitude}-${s.location.coordinates.longitude}`)))
        .map(key => allStations.find(s => `${s.name}-${s.location.coordinates.latitude}-${s.location.coordinates.longitude}` === key)!);
}