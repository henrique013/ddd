import { z } from 'zod'

const rawEnvSchema = z.object({
  VITE_API_URL: z.string().url(),
})

const rawEnv = rawEnvSchema.parse(import.meta.env)

const env = {
  API_URL: rawEnv.VITE_API_URL,
} as const

export default env
