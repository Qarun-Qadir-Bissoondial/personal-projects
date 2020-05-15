import { environment } from './environments/environment';
import * as bcrypt from 'bcrypt';
import * as express from 'express';
import {Request, Response } from 'express';

const db = require('./models/index');
const User = require('./models/user')(db.sequelize, db.Sequelize.DataTypes);

const app = express();
app.use(express.json());

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});

app.get('/', (req, res) => {
  res.status(401).send({message: 'message'});
})

app.post('/auth/check_email', (req: Request, res: Response) => {
  const { email } = req.body;

  if (!email) { res.status(400).send({message: 'Data missing from request body'}) }
  User
    .findOne({where: { email }})
    .then(user => {
      !user
        ? res.status(200).send({available: true})
        : res.status(409).send({available: false})
    })
    .catch(error => { res.status(500).send({message: 'Something went wrong internally'}); });

});

app.post('/auth/register', (req: Request, res: Response) => {
  
  // check if user data is present in request
  // if not then bad request

  const {firstname, lastname, email, password} = req.body;

  if (!firstname || !lastname || !email || !password) {  
    res.status(400).send({message: 'Data missing from request body'});
  }

  // start hashing password
  bcrypt.hash(password, environment.SALT_ROUNDS, (error: Error, hash: string) => {

    // create user
    User.create({
      firstname,
      lastname,
      email,
      password: hash
    }).then(createdUser => {
      console.log('User created successfully');
      console.log(createdUser.toJSON());
      res.status(200).send({message: 'User created successfully'});
    }).catch(error => {
      console.log(error);
      res.status(500).send({message: 'Internal Error Occurred. Please try again later'})
    });
  })

});

app.post('/auth/login', (req: Request, res: Response) => {
  
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send({message: 'Data missing from request body'})
  }

  User
    .findOne({where: { email }})
    .then(user => {
      if (!user) {
        res.status(404).send({message: 'User not found'})
      } else {
        bcrypt
          .compare(password, user.password, (error: Error, same: boolean) => {
            same
              ? res.status(200).send({message: 'login successful'})
              : res.status(401).send({message: 'Email and password do not match'})
          })
      }
    })
    .catch(error => { console.log(error); res.status(500).send({message: 'Internal Error Occurred. Please try again later'}) })


}); 

server.on('error', console.error);
