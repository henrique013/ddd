import { DependencyContainer } from 'tsyringe'
import { t } from '@app/container/tokens.js'
import { env } from '@app/env.ts'
import { ApiClient } from '@app/services/api.ts'

export function registerServices(container: DependencyContainer) {
  container.register(t.services.IApiClient, {
    useFactory: () => new ApiClient(env.API_BASE_URL),
  })
}
