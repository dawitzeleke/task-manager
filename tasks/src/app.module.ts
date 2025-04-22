// tasks-ms/src/app.module.ts
ClientsModule.register([
  {
    name: 'USER_SERVICE',
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 3001,
    },
  },
]),
