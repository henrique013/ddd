import { BrasilApiClient, IBrasilApiClient } from '@/services/BrasilApiClient'

const cache: Map<string, unknown> = new Map()

export type Container = {
  brasilApiClient: () => IBrasilApiClient
}

const container: Container = {
  brasilApiClient: () => {
    if (!cache.has('brasilApiClient')) {
      cache.set('brasilApiClient', new BrasilApiClient('https://brasilapi.com.br/api'))
    }
    return cache.get('brasilApiClient') as BrasilApiClient
  },
}

export default container
