import express from 'express'
import cassandra from 'cassandra-driver'

const app = express()
const port = process.env.PORT || 8080
const client = new cassandra.Client({
    contactPoints: ['cassandra'],
    localDataCenter: 'datacenter1',
    keyspace: 'test'
})
const uuid = cassandra.types.Uuid

app.get("/", async(req, res, next) => {
    try{
        const id = uuid.random()
        const query = req.query?.query
        // const query = 'INSERT INTO test.users(id, username, password) VALUES (?, ?, ?)'
        // const result = await client.execute(query, [ id, 'John', '1234' ])
        const query1 = 'SELECT * FROM users'
        const result1 = await client.execute(query)
        return res.send(result1)
    }
    catch(err){
        console.log(err)
    }

    return res.send("hello")
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
})