
const fs = require('fs')

const path = process.argv[2]

const words = Object.keys(fs.readFileSync(`text/list/word/${path}.csv`, 'utf-8')
  .trim()
  .split(/\n+/)
  .reduce((m, x) => {
    m[x] = true
    return m
  }, {}))

fs.writeFileSync(`text/list/word/${path}.csv`, words.join('\n'))
