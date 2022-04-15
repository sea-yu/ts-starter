import esbuild from 'esbuild'
import { resolve } from 'path'
import { clearPath } from './utils/files'

const outdir = resolve(__dirname, '../dist')
clearPath(outdir)

esbuild.build({
  entryPoints: [
    resolve(__dirname, '../src/index.ts')
  ],
  outdir,
  minify: true,
  bundle: true,
  platform: 'node',
})
