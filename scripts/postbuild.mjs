// Strips files the Sites uploader refuses (hidden files and source maps)
// from the build output, so `deploy.json` can point straight at dist/.
import { readdirSync, rmSync, statSync } from 'node:fs'
import { resolve } from 'node:path'

function clean(dir) {
  for (const name of readdirSync(dir)) {
    const filePath = resolve(dir, name)
    if (name.startsWith('.') || name.endsWith('.map')) {
      rmSync(filePath, { recursive: true, force: true })
      continue
    }
    if (statSync(filePath).isDirectory()) clean(filePath)
  }
}

// Resolve dist path relative to the project root using import.meta.dirname (ESM)
// import.meta.dirname gives the directory of the current module
const distDir = resolve(import.meta.dirname, '..', 'dist')
clean(distDir)
