const db = require('../db/dbConfig');

const userController = {

  //ADD NEW USERS
  addUser(req, res) {
<<<<<<< HEAD

    let addUser = `INSERT INTO "Users" ("username", "password", "first_name", "last_name", "email") VALUES ('${req.body.username}','${req.body.password}','${req.body.first_name}','${req.body.last_name}','${req.body.email}');`

    db.connect()
      .then(obj => {
        // db.query(`INSERT INTO "Users" ("username", "password", "first_name", "last_name", "email") VALUES ('${req.body.username}','${req.body.password}','${req.body.first_name}','${req.body.last_name}','${req.body.email}');`)
        db.query(addUser)
          .then((resp) => {
            console.log('user created')
            res.status(200).send(resp);
          })
          .catch((err) => res.status(404).send(err));
      })
      .catch(err => {
        console.log('error connecting')
        res.status(404).send(err);
      });
  },

  //GET ALL USERS
  allUsers(req, res) {
    db.connect()
      .then(obj => {
        console.log('db connected');
        db.query('SELECT * FROM "Users"')
          .then((resp) => {
            console.log(resp);
            res.status(200).send(resp);
          })
          .catch((err) => res.status(404).send(err));
      })
      .catch(error => {
        console.log('error connecting')
        res.status(404).send(error);
      });
  },

  //LOGIN/LOGOUT 
  login(req, res) {
    //connect to db
    //verify credentials
  },
  logout(req, res) {
    console.log('logging out');
    req.logout();
    res.redirect('/');
  },

  forgotpw(req, res) {
    //connect to db
    //verify credentials
  }
=======
>>>>>>> 701ff79cbf3ea2cc891f21317b32448dccefb214

    let addUser = `INSERT INTO "Users" ("username", "password", "first_name", "last_name", "email") VALUES ('${req.body.username}','${req.body.password}','${req.body.first_name}','${req.body.last_name}','${req.body.email}');`

    db.connect()
      .then(obj => {
        // db.query(`INSERT INTO "Users" ("username", "password", "first_name", "last_name", "email") VALUES ('${req.body.username}','${req.body.password}','${req.body.first_name}','${req.body.last_name}','${req.body.email}');`)
        db.query(addUser)
          .then((resp) => {
            console.log('user created')
            res.status(200).send(resp);
          })
          .catch((err) => res.status(404).send(err));
      })
      .catch(err => {
        console.log('error connecting')
        res.status(404).send(err);
      });
  },

  //GET ALL USERS
  allUsers(req, res) {
    db.connect()
      .then(obj => {
        console.log('db connected');
        db.query('SELECT * FROM "Users"')
          .then((resp) => {
            console.log(resp);
            res.status(200).send(resp);
          })
          .catch((err) => res.status(404).send(err));
      })
      .catch(err => {
        console.log('error connecting')
        res.status(404).send(err);
      });
  },

  //LOGIN
  login(req, res, next) {
    const user = req.body.user;
    const pw = req.body.pw;
    //connect to data base
    db.connect()
      .then(obj => {
        db.query(`SELECT EXISTS (SELECT * FROM "Users" WHERE "username" = '${user}' AND "password" = '${pw}')`)
          .then((resp) => {
            console.log(resp);
            if (resp){
              res.send(resp)
            } else {
              res.send('error')
              // res.redirect('/login');
            }
          })
          .catch((err) => {
            console.log(err);
            res.status(404).send(err);
          });
      })
      .catch(err => res.status(404).send(err))
  },

  logout(req, res) {
  },

  //FORGOT PASSWORD
  forgotpw(req, res) {
    //enter username and email 
    //connect to db
    //db checks if username and email exists
    //message if your account exists an email will be sent
  },

  //FORGOT PASSWORD
  updatePw(req, res) {
    //user clicks link in email
    //update password query
  }
};


module.exports = userController;