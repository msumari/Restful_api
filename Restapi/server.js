const express = require('express');
const app = express();
// const { JsonDB } = require('node-json-db')
// const { Config } = require('node-json-db/dist/lib/JsonDBConfig')


// const db = new JsonDB(new Config('apitest', true, false, '/'));

// const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true},{ useUnifiedTopology: true })
// const db = mongoose.connection

// db.on('error', (error)=> console.error(error))
// db.once('open', () => console.log('connected to database'))

const testRoute = require('./routes/test')
app.use('/test', testRoute)
app.use(express.json())

 

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`api live on port ${PORT}`))