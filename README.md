[![npm version](https://badge.fury.io/js/serverless-elastic-apm.svg)](https://badge.fury.io/js/serverless-elastic-apm)

# serverless-elastic-apm

A simple proxy and self configurable elastic_apm agent for AWS Lambda

## Installation

With npm:

```
npm i --save serverless-elastic-apm
```

With yarn:

```
yarn add serverless-elastic-apm
```

## Configuration via environment variables

`ES_APM_SERVICE_NAME`: `(required)` The service name

`ES_APM_SECRET_TOKEN`: `(optional)` The APM Server secret token

`ES_APM_SERVER_URL`: `(required)` The APM Server url

## Usage

```javascript
const apm = require('serverless-elastic-apm')

const handler = async (event, context) => {
  return 42
}

module.exports = apm(handler)
```

## Advanced usage

For more details visit the [ElasticAPM documentation](https://www.elastic.co/guide/en/apm/agent/nodejs/current/index.html)

## <a name="license"></a>License

ISC © [Carlos Castellanos](https://github.com/ccverak)
