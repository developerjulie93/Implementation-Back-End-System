require('dotenv').config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import jwtMiddleware from './lib/jwtMiddleware';
import api from './api';

const {PORT, MONGO_URL} = process.env;

mongoose
 .connect(MONGO_URL, {useNewUrlParser: true,useFindAndModify: false})
  .then(()=>{
      console.log('Connected to MongoDB');
  })
  .catch(e=>{
      console.error(e);
  });

const app = new Koa();
const router = new Router();

router.use('/api', api.routes()); //use api router
app.use(bodyParser());
app.use(jwtMiddleware);
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, ()=>{
    console.log('Listening to port %d', port);
});