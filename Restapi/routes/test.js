const express = require ('express')
const router = express.Router()
const { JsonDB } = require('node-json-db')
const { Config } = require('node-json-db/dist/lib/JsonDBConfig')


const db = new JsonDB(new Config('apitest', true, false, '/'));

//Get all
router.get('/',(req,res) => {
   try {
       const users = db.getData("/")
       res.json(users)
   } catch (error) {
       res.status(500).json({message:'can not  find user'})
   }
 } )

//Create one
router.post('/register', (req,res) => {
    const id = req.body.id ;
    const name = req.body.name;
    const path = `/user/${id}`
     
    try {
        db.push(path, { id,name })
        res.status(201).json({message:'User registered successful'})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Error registering user'})
        
    }
})

//Get one
router.get('/:id', (req,res) => {

})
//Update one
router.patch('/:id', (req,res) => {
    
})
//Delete one 
router.delete('/:id', (req,res) => {
    
})















module.exports = router;