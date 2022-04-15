import { existsSync,rmSync } from 'fs'

export function clearPath(path: string) {
  if (existsSync(path)) {
    rmSync(path, {
      recursive: true, 
      force: true,
    })
  }
}
