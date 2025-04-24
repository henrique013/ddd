import { UserFriendlyError } from '@/errors.ts'

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

    if (response.status === 404) {
      throw new UserFriendlyError('DDD não encontrado')
    }

    if (!response.ok) {
      throw new UserFriendlyError('O serviço está temporariamente indisponível')
    }

    const cities: string[] = (await response.json()).cities

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
