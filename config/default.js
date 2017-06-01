const defer = require('config/defer').deferConfig;
const path = require('path');

module.exports = {
  // secret data can be moved to env variables
  // or a separate config
  secret:   'mysecret',
  mongoose: {
    // uri:     'mongodb://localhost/app',
    uri:     'mongodb://admin:admin@cluster0-shard-00-00-h3esm.mongodb.net:27017,cluster0-shard-00-01-h3esm.mongodb.net:27017,cluster0-shard-00-02-h3esm.mongodb.net:27017/testDataBase?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',
    options: {
      server: {
        socketOptions: {
          keepAlive: 1
        },
        poolSize:      5
      }
    }
  },
  crypto: {
    hash: {
      length:     128,
      // may be slow(!): iterations = 12000 take ~60ms to generate strong password
      iterations: process.env.NODE_ENV == 'production' ? 12000 : 1
    }
  },
  template: {
    // template.root uses config.root
    root: defer(function(cfg) {
      return path.join(cfg.root, 'templates');
    })
  },
  root:     process.cwd()
};
