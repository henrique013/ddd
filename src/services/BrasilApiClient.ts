import { UserFriendlyError } from '@/errors.ts'
import { z } from 'zod'

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
    const response = await this.fetch(url)

    if (response.status === 404) {
      throw new UserFriendlyError('DDD não encontrado')
    }

    const json = await response.json()
    const schema = z.object({
      cities: z.array(z.string()),
    })
    const data = schema.parse(json)

    return data.cities.sort()
  }

  private async fetch(url: string): Promise<Response> {
    const response = await fetch(url)

    if (!response.ok || response.status === 404) {
      throw new UserFriendlyError('O serviço está temporariamente indisponível')
    }

    return response
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
