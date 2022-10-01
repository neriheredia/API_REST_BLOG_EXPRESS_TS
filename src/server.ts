import { app } from './app'
import nosqlConnect from './settings/mongo_settings/mongodbConnect'
import { seedUsers } from './settings/mongo_settings/seed_users'

const port = 5000
const engine = <string>process.env.DB_ENGINE
const seed = <string>process.env.SEED_DB

app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`)
})

if (engine === 'nosql') nosqlConnect()

if (seed === 'true') seedUsers()
