//this module will hold all the recipes we have

//we will have a mongodb server to hold our recipes



const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'recipesDb';

async function main(command, id, document) {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  // if we add a recipe, insert
  if (command === 'addRecipe') {
      const update = await collection.updateOne(id, {$set: document}, {upsert: true});
    
      console.log('updated docs', update)

  }
  //if we want to find all
  if (command === 'findAll') {
      let obj = {}
      const findAll = await collection.find().forEach(x => {
          obj[x.id] = x;
      });
     return obj;
  }


  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close())




module.exports.main = main;
