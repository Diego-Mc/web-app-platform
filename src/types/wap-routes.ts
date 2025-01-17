export type WapRoute<Path extends string> = {
  path: Path
  label: string
}

export type WapRoutes<Path extends string> = WapRoute<Path>[]
