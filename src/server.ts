import { app } from './app'
import nosqlConnect from './settings/mongo/mongodbConnect'
import { seedUsers } from './settings/mongo/seed_users'
import { swaggerDocs } from './settings/swagger/swagger_config'

const port = <string>process.env.PORT
const engine = <string>process.env.DB_ENGINE
const seed = <string>process.env.SEED_DB

app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`)
  swaggerDocs(app, port, 'v1')
})

if (engine === 'nosql') nosqlConnect()

if (seed === 'true') seedUsers()
