
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME || 'admin';

if (!uri) {
  console.error('Error: falta la variable MONGODB_URI en .env o en el entorno.');
  process.exit(1);
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db(dbName).command({ ping: 1 });
    console.log(`Conectado a MongoDB en la base de datos "${dbName}".`);
  } catch (err) {
    console.error('Error conectando a MongoDB:', err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

run().catch((err) => {
  console.error('Error en run():', err);
  process.exit(1);
});
