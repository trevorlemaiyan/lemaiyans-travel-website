const { createServer } = require('node:http')
const next = require('next')

const hostname = '0.0.0.0'
const port = Number.parseInt(process.env.PORT || '3000', 10)
const app = next({ dev: false, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(port, hostname, () => {
    console.log(`Next.js is listening on ${hostname}:${port}`)
  })
}).catch((error) => {
  console.error('Failed to start Next.js:', error)
  process.exit(1)
})
