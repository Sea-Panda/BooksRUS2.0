const { User } = require('../model/schema');

const userController = {};

userController.register = async (req, res, next) => {
  // create a doc

  /*  {"username": "tester1",
   "email": "12354@codesmith.io",
   "password": "1234"
   }  */
  const { username, email, password } = req.body;
  await User.create({ username: username, email: email, password: password })
    .then((res) => { console.log('user registered!!!!!!'); return next() })
    .catch((err) => next({ message: { err: 'user registered err' } }));
};

userController.login = async (req, res, next) => {
  //finds user 
  //if found return next
  //else return next(err)
  //req.body should could contain email, password
  const { email, password } = req.body;
  // console.log('body?????', req.body);
  await User.findOne({ email: email, password: password }) // frontend needs to know the query response format: null/user data
    .then((data) => {
      console.log("inside find", data);
      if (data) {
        res.locals.user = data;
        // console.log('res!!!', data.username);
        return next();
      } else {
        res.locals.user = null;
        return next();
      }
    })
    .catch((err) => next({ message: { err: 'user login err' } }));
};

userController.deleteUser = async (req, res, next) => {
  try {
    console.log('I am in the delete user controller');
    const { _id } = req.params;

    await User.deleteOne({ _id });
    console.log('I am after deleting the user');
    return next();
  }
  catch (err) {
    return next({ message: { err: 'user delete err' } })
  }
}

userController.updateUser = async (req, res, next) => {
  try {
    const { _id, username, password, email } = req.body;

    const edited = await User.findOneAndUpdate({ _id }, { username, password, email }, { new: true });
    res.locals.editUser = edited;
    return next();
  } catch (err) {
    return next({ message: { err: 'user update err' } })
  }
}

module.exports = userController;