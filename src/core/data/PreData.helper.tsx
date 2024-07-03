import { getData } from '../server/getData'

export default async function PreDataHelper() {
    const data = await getData()

    return (
        <>
            <pre>{JSON.stringify(data, null, 2)}</pre> // This will display the
        </>
    )
}
