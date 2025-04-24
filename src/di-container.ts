/*
 * Dependency Injection container for managing application dependencies.
 * This file centralizes dependencies instantiation and enables singleton pattern through caching.
 */

import { BrasilApiClient, IBrasilApiClient } from '@/services/BrasilApiClient'

const cache: Map<string, unknown> = new Map()

export type Container = {
  brasilApiClient: () => IBrasilApiClient
}

const container: Container = {
  brasilApiClient: () => {
    if (!cache.has('brasilApiClient')) {
      const baseUrl = import.meta.env.VITE_API_URL
      cache.set('brasilApiClient', new BrasilApiClient(baseUrl))
    }
    return cache.get('brasilApiClient') as BrasilApiClient
  },
}

export default container
