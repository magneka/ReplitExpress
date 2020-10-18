const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Now we are cooking');
});


app.listen(3000, () => console.log('Gator app listening on port 3000!'));