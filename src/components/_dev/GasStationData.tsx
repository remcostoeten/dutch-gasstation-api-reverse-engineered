import { getData } from '@/core/server/getData'
import type { GasStation } from '@/core/types'

export default async function GasStationData() {
    const data = await getData()

    return (
        <>
            <main className='bg-gray-100 min-h-screen p-8'>
                <div className='max-w-4xl mx-auto'>
                    <h1 className='text-2xl font-bold text-gray-800 mb-4'>
                        Gas Stations
                    </h1>
                    <ul className='bg-white shadow overflow-hidden rounded-md divide-y divide-gray-200'>
                        {data.map((gasStation: GasStation) => (
                            <li key={gasStation.name} className='px-6 py-4'>
                                <div className='flex justify-between items-center'>
                                    <span className='text-gray-900 font-medium'>
                                        {gasStation.name}
                                    </span>
                                    <span className='text-gray-600'>
                                        {gasStation.fuel.fuelPrice.toFixed(3)}{' '}
                                        €/l
                                    </span>
                                </div>
                                <div className='text-sm text-gray-500'>
                                    {gasStation.location.address.streetName}{' '}
                                    {gasStation.location.address.houseNumber},{' '}
                                    {gasStation.location.address.city}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </>
    )
}
