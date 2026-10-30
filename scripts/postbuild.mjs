// Strips files the Sites uploader refuses (hidden files and source maps)
// from the build output, so `deploy.json` can point straight at dist/.
import { readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

// A comment pointing at a map we just deleted makes `wrangler deploy` fail.
const MAP_REF = /\n?\/[/*]# sourceMappingURL=\S*?\.map[\s*]*\s*$/

function clean(dir) {
  for (const name of readdirSync(dir)) {
    const filePath = resolve(dir, name)
    if (name.startsWith('.') || name.endsWith('.map')) {
      rmSync(filePath, { recursive: true, force: true })
      continue
    }
    if (statSync(filePath).isDirectory()) {
      clean(filePath)
      continue
    }
    if (name.endsWith('.js') || name.endsWith('.css')) {
      const before = readFileSync(filePath, 'utf8')
      const after = before.replace(MAP_REF, '\n')
      if (after !== before) writeFileSync(filePath, after)
    }
  }
}

// Resolve dist path relative to the project root using import.meta.dirname (ESM)
// import.meta.dirname gives the directory of the current module
const distDir = resolve(import.meta.dirname, '..', 'dist')
clean(distDir)
