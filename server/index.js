import express from  'express'
import { ParseServer } from 'parse-server'
import ParseDashboard from 'parse-dashboard'

const app = express()

const api = new ParseServer({
  databaseURI: 'mongodb://localhost:27017/parse-test',
  // cloud: './cloud/main.js',
  appId: 'myAppId',
  masterKey: 'myMasterKey',
  fileKey: 'optionalFileKey',
  serverURL: 'http://localhost:1337/parse'
})

const dashboard = new ParseDashboard({
  apps: [
    {
      serverURL: 'http://localhost:1337/parse',
      appId: 'myAppId',
      masterKey: 'myMasterKey',
      appName: 'MyApp'
    }
  ],
  users: [
    {
      user: 'admin',
      pass: 'admin',
    }
  ]
})

app.use('/parse', api)
app.use('/dashboard', dashboard)

app.listen(1337, () => console.log('parse-server-example running on port 1337.'))