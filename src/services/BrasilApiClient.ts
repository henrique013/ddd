export interface IBrasilApiClient {
  getCitiesByDdd(ddd: string): Promise<string[]>
}

export class BrasilApiClient implements IBrasilApiClient {
  private readonly baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async getCitiesByDdd(ddd: string): Promise<string[]> {
    const url = `${this.baseUrl}/ddd/v1/${ddd}`
    const response = await fetch(url)
    const data = await response.json()
    const cities: string[] = data.cities

    return cities.sort()
  }
}

export class BrasilApiClientMock implements IBrasilApiClient {
  private readonly cities: { [key: string]: string[] }

  constructor(cities: { [key: string]: string[] }) {
    this.cities = cities
  }

  async getCitiesByDdd(ddd: string): Promise<string[]> {
    return this.cities[ddd]
  }
}
