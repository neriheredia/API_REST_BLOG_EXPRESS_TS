import { app } from './app';
import { mongodbConnect, seedUsers, seedCategories } from './settings/mongo';
import { swaggerDocs } from './settings/swagger/swagger_config';

const port = <string>process.env.PORT;
const engine = <string>process.env.DB_ENGINE;
const seed = <string>process.env.SEED_DB;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
  swaggerDocs(app, port, 'v1');
});

if (engine === 'nosql') mongodbConnect();

if (seed === 'true') {
  seedUsers();
  seedCategories();
}
