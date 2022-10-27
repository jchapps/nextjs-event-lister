import { MongoClient } from 'mongodb'

async function handler(req, res) {
  if (req.method === "POST") { //post api/meetup
    const data = req.body;

    const client = await MongoClient.connect('mongodb+srv://jdchappelow:g66IEveaQ1gT18UM@cluster0.cz1vfb6.mongodb.net/locations?retryWrites=true&w=majority')
    const db = client.db();

    const locationsCollection = db.collection('locations');

    const result = await locationsCollection.insertOne(data);
  }
}

export default handler;
