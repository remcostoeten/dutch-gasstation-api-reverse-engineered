import { NextResponse } from 'next/server'
import { getMultipleCitiesGasStations } from '@/core/server/actions'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const term = searchParams.get('term')

    const allStations = await getMultipleCitiesGasStations()

    if (term) {
        const filteredStations = allStations.filter(
            (station) =>
                station.name.toLowerCase().includes(term.toLowerCase()) ||
                station.location.address.city
                    .toLowerCase()
                    .includes(term.toLowerCase()) ||
                station.location.address.province
                    .toLowerCase()
                    .includes(term.toLowerCase())
        )
        return NextResponse.json(filteredStations)
    }

    return NextResponse.json(allStations)
}
