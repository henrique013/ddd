/// <reference types="vite/client" />

/*
 * Define types for environment variables.
 */

interface ImportMetaEnv {
  readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
