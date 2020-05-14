const SALT_ROUNDS = 10;

const express = require('express');
const db = require('./models/index');
const User = require('./models/user')(db.sequelize, db.Sequelize.DataTypes);
const bcrypt = require('bcrypt');

import { Request, Response } from 'express';

const app = express();
app.use(express.json());

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});

app.post('/auth/login', (req: Request, res: Response) => {
  console.log(req.body);
  const {email, password} = req.body; // should contain email and password fields

  bcrypt.hash(password, SALT_ROUNDS, (error, hash) => {
    console.log(hash);
    User.findAll({where: { email, password: hash }})
    .then((users: object[]) => {
      console.log(users);
      if (users.length === 0) { res.status(404).redirect(404, '/login'); }
      else {
        const user = users[0];
        console.log(user);
        
      }


    })
    .catch(error => { console.error(error); res.status(500).send('error'); })
  })


  
  
  
});

server.on('error', console.error);
