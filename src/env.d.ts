/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PORT: number
  readonly VITE_PREFIX_CLS: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
