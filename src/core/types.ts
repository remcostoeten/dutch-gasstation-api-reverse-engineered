export type GasStation = {
    distance: number
    fuel: {
        fuelPrice: number
        lastUpdated: string
    }
    location: {
        address: {
            city: string
            houseNumber: string
            postcode: string
            province: string
            streetName: string
        }
        coordinates: {
            latitude: number
            longitude: number
        }
    }
    name: string
}
