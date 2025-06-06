import { z } from 'zod'

const envSchema = z.object({
  API_BASE_URL: z.string().url(),
})

/**
 * The environment variables parsed from the process.env.
 */
export const env = envSchema.parse(process.env)
