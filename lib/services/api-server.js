// @flow

import type {
  Multicolour$SingleDatabaseConnectionConfig,
  Multicolour$APIServiceConfig,
} from "../../flow/declarations/multicolour/config.flow"

const MulticolourServer = require("../server/server")

class APIServer {
  server: MulticolourServer

  constructor(service: Multicolour$SingleDatabaseConnectionConfig | Multicolour$APIServiceConfig) {
    this.server = new MulticolourServer(service)

    this.start()
  }

  start() {
    return Promise.resolve(
      this.server.listenToHTTP()
    )
  }
}

module.exports = APIServer