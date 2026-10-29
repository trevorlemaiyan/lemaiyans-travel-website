const { createServer } = require('node:http')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = next({ dev, dir: __dirname })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = createServer((req, res) => handle(req, res))

  // Passenger can pass a port number or a unix socket path.
  // Passing only `port` without hardcoded hostname allows Node's server
  // to bind correctly to unix domain sockets, pipes, or numeric TCP ports.
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on ${port}`)
  })
}).catch((error) => {
  console.error('Failed to start Next.js:', error)
  process.exit(1)
})
