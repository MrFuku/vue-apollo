const express = require('express')
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')
const schema = require('./schema/schema')
const app = express()

const user = 'user'
const pass = 'password'
mongoose.connect(`mongodb://${user}:${pass}@mongo/test`)
mongoose.connection.once('open', () => {
  console.log('connected mongodeb')
})
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
  })
)
app.listen(4000, () => {
  console.log('listening port 4000')
})
