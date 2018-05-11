const serviceBus = require('./services/servicebus')

const batch = [{
  'action': 'up',
  'turnServerId': 1,
  'vmIds': [1, 2, 3, 4]
}, {
  'action': 'down',
  'turnServerId': 2,
  'vmIds': [1, 2, 3, 4]
}]

serviceBus.sendServiceBusRequestBatch(batch)
