import { getData } from "@/core/server/actions"

export default async function PreData() {
    const data = await getData()
    console.log(data)
    return (
        <>
            <pre>{JSON.stringify(data, null, 2)}</pre> // This will display the
        </>
    )
}
