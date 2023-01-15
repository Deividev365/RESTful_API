import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import routes from './src/routes/crmRoutes';
const app = express();
const PORT = 3000;


// mongo connection

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017", {useNewUrlParser: true});


// body parser setup

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.get('/',(req, res) => {

    res.send(`Node and express running on port: ${PORT}`);

});

app.get('/test',(req, res) => {

    res.send(`Node and express running on port: ${PORT}`);

});


app.listen(PORT, () => {
    
    console.log(`Your server is running on port: ${PORT}`);
});