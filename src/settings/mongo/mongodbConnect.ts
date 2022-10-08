import 'dotenv/config';
import { connect } from 'mongoose';

const dbMongoConnect = async (): Promise<void> => {
  const nodeEnv = <string>process.env.NODE_ENV
  const DB_URI = nodeEnv === 'development' ? <string>process.env.DB_URI_TEST : <string>process.env.DB_URI_CONTAINER;
  await connect(DB_URI)
    .then(() => console.log('***** CONNECT DATABASE *****'))
    .catch((e) => console.log('***** ERROR CONNECT DATABASE *****'));
}

export default dbMongoConnect;
