import { getMultipleCitiesGasStations } from '@/core/server/actions';
import HomeWrapper from '@/components/HomeWrapper';

export default async function Page() {
    const initialStations = await getMultipleCitiesGasStations();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Dutch Gas Stations</h1>
            <HomeWrapper initialStations={initialStations} />
        </div>
    );
}