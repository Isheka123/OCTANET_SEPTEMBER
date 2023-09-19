import express from 'express';
import cors from 'cors';
import connection from './database/db.js';
import Routes from './routes/route.js';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/",Routes);

const port = 8000;

connection();

app.listen(port,() => {
    console.log('listening on port ' + port); 
} )