const express = require('express')
const app = express()
const client = redis.createClient({
   host: 'db',
   port: 6379
})
client.set('visits', 0)
app.get('/', async (req, res) => {
  client.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits)
    client.set('visits', parseInt(visits) + 1)
  })
})
app.listen(8081, () => {
  console.log('Listening on port 8081');
})