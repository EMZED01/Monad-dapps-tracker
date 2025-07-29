
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { selected } = req.body;
  const { MongoClient } = require('mongodb');

  const client = new MongoClient(process.env.MONGO_URI);
  try {
    await client.connect();
    const db = client.db("monad_tracker");
    const collection = db.collection("selections");
    await collection.insertOne({ selected, timestamp: new Date() });
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save' });
  } finally {
    await client.close();
  }
}
