const MongoClient = require('mongodb').MongoClient;

async function main(){
    const uri = "mongodb+srv://Deepak:Qwerty12345@cluster0.0ghtd.mongodb.net/chat-bot?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    
    try {
        await client.connect()
        let sampleData = [{
            name:"M",
            age:25
        },{name:'D',age:25},{name:'S',age:25}]
        //await createListing(client,sampleData)
        //await createMultipleListing(client,sampleData)
        await findListingByName(client,"Mads")

    } catch (error) {
        console.log('error',error)
    }finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:",databasesList);
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function createListing(client,newListing){
    const result = await client.db('chat-bot').collection('users').insertOne(newListing)
    console.log('result',result)
}

async function createMultipleListing(client,newListing){
    const result = await client.db('chat-bot').collection('users').insertMany(newListing)
    console.log('result',result)
}


async function findListingByName(client,nameOfListing){
    const result = await client.db('chat-bot').collection('users').findOne({name:nameOfListing})
    if(result){
        return console.log('result',result)
    }
    return console.log('Not Found')
}



// await client.connect(err => {
//   const collection = client.db("chat-bot").collection("users");
//   console.log('test',collection)
//   // perform actions on the collection object
//   client.close();   
// });
