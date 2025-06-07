import { NotFoundError, RuntimeError } from '@app/errors.ts'
import { z } from 'zod'

export interface IApiClient {
  getCitiesByDdd(ddd: string): Promise<string[]>
}

export class ApiClient implements IApiClient {
  private readonly baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async getCitiesByDdd(ddd: string): Promise<string[]> {
    const url = `${this.baseUrl}/cities/${ddd}`
    const response = await this.fetch(url)

    if (response.status === 404) {
      throw new NotFoundError('DDD não encontrado')
    }

    const schema = z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        state: z.string(),
        ddd: z.number(),
      })
    )
    const json = await response.json()
    const data = schema.parse(json)
    const cities = data.map((city) => city.name)

    return cities
  }

  private async fetch(url: string): Promise<Response> {
    const response = await fetch(url)

    if (!response.ok && response.status !== 404) {
      throw new RuntimeError('O serviço está temporariamente indisponível')
    }

    return response
  }
}
