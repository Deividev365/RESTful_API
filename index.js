import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import routes from './src/routes/crmRoutes';
const app = express();
const PORT = 4000;


// mongoose connection

mongoose.Promise = global.Promise;

mongoose.set("strictQuery", true);

mongoose.connect("mongodb://127.0.0.1:27017/", {

    useNewUrlParser: true

});


// bodyparser setup

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// serving static files

app.use(express.static('public'))



routes(app);


app.get('/',(req, res) => {

    res.send(`Node and express running on port: ${PORT}`);

});



app.listen(PORT, () => {
    
    console.log(`Your server is running on port: ${PORT}`);
});