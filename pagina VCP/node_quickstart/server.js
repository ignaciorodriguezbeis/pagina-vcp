require('dotenv').config();
const express = require('express');
const { ObjectId } = require('mongodb');
const { connect, client } = require('./db');

async function start() {
  const app = express();
  app.use(express.json());

  const db = await connect();
  const items = db.collection('items');

  app.get('/items', async (req, res) => {
    const list = await items.find({}).toArray();
    res.json(list);
  });

  app.get('/items/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const item = await items.findOne({ _id: new ObjectId(id) });
      if (!item) return res.status(404).json({ error: 'No encontrado' });
      res.json(item);
    } catch (err) {
      res.status(400).json({ error: 'ID inválido' });
    }
  });

  app.post('/items', async (req, res) => {
    const doc = req.body;
    const result = await items.insertOne(doc);
    res.status(201).json({ insertedId: result.insertedId });
  });

  app.put('/items/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const update = req.body;
      const result = await items.updateOne({ _id: new ObjectId(id) }, { $set: update });
      res.json({ matched: result.matchedCount, modified: result.modifiedCount });
    } catch (err) {
      res.status(400).json({ error: 'ID inválido' });
    }
  });

  app.delete('/items/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const result = await items.deleteOne({ _id: new ObjectId(id) });
      res.json({ deleted: result.deletedCount });
    } catch (err) {
      res.status(400).json({ error: 'ID inválido' });
    }
  });

  const port = process.env.PORT || 3000;
  const server = app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
  });

  // Graceful shutdown
  process.on('SIGINT', async () => {
    console.log('Cerrando servidor y conexión MongoDB...');
    await client.close();
    server.close(() => process.exit(0));
  });
}

start().catch((err) => {
  console.error('Error iniciando servidor:', err);
  process.exit(1);
});
