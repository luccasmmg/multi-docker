const keys = require('./keys')
const redis = require('redis')

const publisher = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000
})
const subscriber = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retriy_strategy: () => 1000
})

function fib(index) {
  if (index < 2) return 1
  return fib(index - 1) + fib(index - 2)
}

subscriber.on('message', function(channel, message) {
  console.log(message)
  //publisher.hset('values', message, fib(parseInt(message)))
})
subscriber.subscribe('values')
