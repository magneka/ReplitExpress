const express = require('express');
const bodyParser = require("body-parser");
const app = express();

const Database = require("@replit/database")
const db = new Database()
db.set("1", {
      firstname: 'Magne',
      lastname: 'Alvheim'
    }).then(() => {})
db.set("2", {
      firstname: 'Donald',
      lastname: 'Trump'
    }).then(() => {})


app.get('/', (req, res) => {
    res.send('Now we are cooking');
});

app.get('/userids', async (req, res) => {  
  let result = await db.list()
  res.json(result);  
});

app.get('/users', async (req, res) => {  
  let ids = await db.list()
  let result = [{}]

  for (var i = 0; i < ids.length; i++) {    
    let usr = await db.get(i+1)
    result[i] = {id: i, ...usr}
  }
  res.json(result);  
});

app.get('/user/:id', async (req, res) => {
  console.log(req.params.id)  
  let result = await db.get(req.params.id)
  res.json(result) 
});

app.post('/user/:id', async (req, res) => {
  var id = req.body.id
  let record = {
    firstname: req.body.firstname,
    lastname: req.body.lastname
  }  
  console.log("User lastname = " + lastname + ", firstname "+ firstname)  
  await db.set(id, record)
})

app.listen(3000, () => console.log('Gator app listening on port 3000!'))