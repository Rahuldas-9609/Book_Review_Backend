express= require('express');
const app= express();

app.get('/',(req,res)=> {
    res.send('Rahul Das');
});

app.listen(8000)