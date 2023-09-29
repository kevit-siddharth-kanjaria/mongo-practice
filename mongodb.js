const { MongoClient } = require('mongodb')
const querySet = require('./queries')

const question = process.argv[2] || 1

const filter = querySet[question].filter;
const projection = querySet[question].projection
const limit = querySet[question].limit || 0
const skip = querySet[question].skip || 0
const sort =querySet[question].sort || {}

const cli = async () => {
    const client = await MongoClient.connect('mongodb://localhost:27017/')
    const coll = client.db('restaurants').collection('restaurants');

    const cursor = coll.find(filter).project(projection).limit(limit).skip(skip).sort(sort);

    const result = await cursor.toArray();

    await client.close();

    console.log(result);
}

cli()