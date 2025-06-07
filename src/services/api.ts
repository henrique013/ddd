import { BadArgumentError, NotFoundError, RuntimeError } from '@app/errors.ts'
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

    if (response.ok) {
      return response
    }

    const schema = z.object({
      message: z.string(),
      error: z.string(),
      statusCode: z.number(),
    })
    const json = await response.json()
    const data = schema.parse(json)

    switch (data.statusCode) {
      case 404:
        throw new NotFoundError(data.message)
      case 400:
        throw new BadArgumentError(data.message)
      default:
        throw new RuntimeError('O serviço está temporariamente indisponível')
    }
  }
}
