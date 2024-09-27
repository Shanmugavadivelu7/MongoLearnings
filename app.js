const {MongoClient} = require('mongodb');
const uri = require("./script")

console.log(uri)

const client = new MongoClient(uri);
const dbname = "bank";


const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log(`Connected to the database ${dbname}`);
    }catch(err){
        console.log(err);
        
    }
}

const main = async () => {
    try {
        await connectToDatabase();
    }catch (err){
        console.log(err);
        
    }finally {
        await client.close();
    }
}

main();