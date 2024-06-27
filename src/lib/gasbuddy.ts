// lib/gasbuddy.ts
const baseUrl = 'https://www.gasbuddy.com/graphql'

export const getGasPrices = async (zipCode: string) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            operationName: 'LocationBySearchTerm',
            variables: {
                fuel: 1,
                maxAge: 0,
                search: zipCode
            },
            query: `
        query LocationBySearchTerm($search: String) {
          locationBySearchTerm(search: $search) {
            trends {
              areaName
              country
              today
              todayLow
            }
          }
        }
      `
        })
    })

    if (!response.ok) {
        throw new Error(`Failed to fetch gas prices: ${response.statusText}`)
    }

    return response.json()
}
