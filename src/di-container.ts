/*
 * Dependency Injection container for managing application dependencies.
 * This file centralizes dependencies instantiation and enables singleton pattern through caching.
 */

import { BrasilApiClient, IBrasilApiClient } from '@/services/BrasilApiClient'
import env from '@/env'

const cache: Map<string, unknown> = new Map()

export type Container = {
  brasilApiClient: () => IBrasilApiClient
}

const container: Container = {
  brasilApiClient: () => {
    if (!cache.has('brasilApiClient')) {
      cache.set('brasilApiClient', new BrasilApiClient(env.API_URL))
    }
    return cache.get('brasilApiClient') as BrasilApiClient
  },
}

export default container
