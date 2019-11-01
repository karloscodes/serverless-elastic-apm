const ElasticApm = require('elastic-apm-node')

const apm = ElasticApm.start({
  // Override service name from package.json
  // Allowed characters: a-z, A-Z, 0-9, -, _, and space
  serviceName: process.env.ES_APM_SERVICE_NAME,

  // Use if APM Server requires a token
  secretToken: process.env.ES_APM_SECRET_TOKEN,

  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: process.env.ES_APM_SERVER_URL
})

module.exports = apm
