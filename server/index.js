import express from  'express'
import { ParseServer } from 'parse-server'


const app = express()

const api = new ParseServer({
  databaseURI: 'mongodb://localhost:27017/parse-test',
  // cloud: './cloud/main.js',
  appId: 'myAppId',
  masterKey: 'myMasterKey',
  fileKey: 'optionalFileKey',
  serverURL: 'http://localhost:1337/parse'
})

app.use('/parse', api)

app.listen(1337, () => console.log('parse-server-example running on port 1337.'))