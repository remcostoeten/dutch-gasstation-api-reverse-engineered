'use server'

import type { GasStation } from '@/core/types'

export type GasStationsResponse = {
    gasStations: GasStation[]
}

export async function getData(): Promise<GasStation[]> {
    const API_URL = process.env.NEXT_PUBLIC_API_URL

    if (!API_URL) {
        throw new Error('API_URL is not defined')
    }

    const response = await fetch(API_URL)
    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    const data: GasStationsResponse = await response.json()
    return data.gasStations
}
