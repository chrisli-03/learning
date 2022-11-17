const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./index.template.html', 'utf-8')
})
const createApp = require('./app')

server.get('*', (req, res) => {
  const context = {
    title: 'Hello World',
    meta: `
      <meta content="origin" name="referrer">
    `,
    url: req.url
  }
  const app = createApp(context)

  renderer.renderToString(app, context)
    .then(html => {
      res.end(html)
    })
    .catch(err => {
      console.log(err)
      res.status(500).end('Internal Server Error')
    })
})

server.listen(8080)