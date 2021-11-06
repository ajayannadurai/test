
const express = require('express');
const app = express();

app.use(express.static('public'));  
app.use('/images', express.static('images'));


app.get("/",function(request,response){
    response.sendFile(__dirname + "/index.html");

})


const PORT = process.env.PORT ||5000;

app.listen(PORT, console.log(
`Server started on port ${PORT}`));
