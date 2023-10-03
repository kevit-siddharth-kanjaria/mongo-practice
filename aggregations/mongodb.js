const { MongoClient } = require('mongodb')
const aggregations = require('./aggregations')

const question = process.argv[2] || 1
const agg = aggregations[question-1]
let collection = ''
if (question<=6) {
  collection='playerDetails'
} else {
  collection='empolyeeData'
}

const cli = async function(){
  try {
    const client = await MongoClient.connect(
      'mongodb://localhost:27017/',
    );
    const coll = client.db('players').collection(collection);
    const cursor = coll.aggregate(agg);
    const result = await cursor.toArray();
    await client.close();

    console.log(result);
    console.log("Documents in result of aggregation : " + result.length);
  } catch (error) {
    console.log("Error : " + error);
  }
}
cli()