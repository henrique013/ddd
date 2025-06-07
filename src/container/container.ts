import { container } from 'tsyringe'
import { registerServices } from '@app/container/provider.services.ts'

registerServices(container)

export { container }
