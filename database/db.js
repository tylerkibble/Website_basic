require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
const url = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOSTNAME}`;

async function main() {
  try {
    MongoClient.connect(url, { monitorCommands: true }, function (err, client) {
      if (err) throw err;

      const db = client.db("web");
      const collection = db.collection("main");

      // Perform database operations here...
      console.log("Connected successfully to server");
      console.log(db);
      MongoClient.client.db("web").collection("main").findOne()

      // client.close();
    });
  } catch (e) {
    console.error(e);
  }
}

main();
