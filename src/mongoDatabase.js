//this module will hold all the recipes we have

//we will have a mongodb server to hold our recipes
// const {MongoClient} = require('mongodb');

// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// //database name
// const dbName = 'recipes';
// // const collection = db.collection('recipes');

// async function main() {
//     //connect to server
//     await client.connect();
//     console.log('connected to the server!');
//     const db = client.db(dbName);
    
    
// }
//will insert a new one or update it if the id (title+ author) exists
const insertRecipe = async (document) => {
    console.log('in mongo, we have document', document)
    let id = document.title + document.author;
    let options = {upsert: true}

    await collection.updateOne(id, {
        title: document.title,
        author: document.author,
        ingrediants: document.ingrediants,
        directions: document.directions
    }, options);


};

const testFunc = () => {
    console.log('hi');
}

// main()
// .then(console.log)
// .catch(console.error)
// .finally(()=> {
//     client.close();
// });

// module.exports.insertRecipe = insertRecipe;
module.exports.testFunc = testFunc;