import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    //post api/meetup
    const data = req.body; //includes title,image,address,desc

    const client = await MongoClient.connect(
      "mongodb+srv://jdchappelow:Maggie123@cluster0.cz1vfb6.mongodb.net/?retryWrites=true&w=majority"
    ); //connect to my db
    const db = client.db();

    const locationsCollection = db.collection("locations"); //collection (= tables) and holds documents(=entries in tables)

    const result = await locationsCollection.insertOne(data); // inserts the data object into db - returns automatically generated id

    console.log(result);

    client.close(); //close the db connection

    res.status(201).json({ message: "Location added!" }); //time to send back res object. 201 status code: inserted successfully. prepare outgoing json with message key.
  }
}

export default handler;
