const express = require('express');
const app = express();

const Database = require("@replit/database")
const db = new Database()
db.set("1", {
      firstname: 'Magne',
      lastname: 'Alvheim'
    }).then(() => {});
db.set("2", {
      firstname: 'Donald',
      lastname: 'Trump'
    }).then(() => {});


app.get('/', (req, res) => {
    res.send('Now we are cooking');
});

app.get('/users', async (req, res) => {  
  let result = await db.list()
  res.json(result);  
});

app.get('/user/:id', async (req, res) => {
  console.log(req.params.id)  
  let result = await db.get(req.params.id)
  res.json(result);  
});

app.post('/user/:id', async (req, res) => {
  
});

app.listen(3000, () => console.log('Gator app listening on port 3000!'));