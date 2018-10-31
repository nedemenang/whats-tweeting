import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import dotenv from 'dotenv';
import path from 'path';
import mongoose from 'mongoose';
import config from './config/database';
import userRoutes from './routes/users';
import tweetRoutes from './routes/tweets';

dotenv.load();

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
  console.log(`Connected to database ${config.database}`);
});

mongoose.connection.on('error', err => {
  console.log(`Database error ${err}`);
});



// Set up the express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

if(process.env.NODE_ENV !== "production"){
  app.use(express.static(path.join(__dirname, '../dist/client/')));
} else {
  app.use(express.static(path.join(__dirname, '../client')));
}


app.use(cors());

app.use('/users', userRoutes);
app.use('/tweets', tweetRoutes);

const port = parseInt(process.env.PORT, 10) || 8080;

app.listen(port, () => {
  console.log(`We are live on ${port}`);
});

export default app;

app.get('/*', (req, res) => {
  if(process.env.NODE_ENV !== "production"){
    res.sendFile(path.join(__dirname, '../client/src/index.html'));
  } else {
    res.sendFile(path.join(__dirname, '../client/index.html'));
  }
    
});
