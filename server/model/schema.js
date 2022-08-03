const mongoose = require('mongoose');
const { schema } = require("webpack-dev-server");

// const MONGO_URI = `mongodb+srv://hmu1540:Gt7130mhm%40%40@cluster0.8mkig.mongodb.net/?retryWrites=true&w=majority`;
// const MONGO_URI = `mongodb+srv://kawaiiyummy14:Y7tM6quZ2jPiC0on@cluster0.bul5twv.mongodb.net/?retryWrites=true&w=majority`;
// const MONGO_URI = `mongodb+srv://xkevinle:Lol123123@cluster0.uvftduh.mongodb.net/?retryWrites=true&w=majority`;
const MONGO_URI = 'mongodb+srv://wilsontyler95:7mGSNwzR14oCSVft@cluster0.k4u8x.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'Books'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const commentsSchema = new mongoose.Schema({ // username, time, comment
  username: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    default: Date.now
  },
  comment: {
    type: String,
    required: true
  },

});
const Comment = mongoose.model('Comments', commentsSchema);

const bookSchema = new mongoose.Schema({ // name, desc, isbn, imageUrl, moreInfo
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  moreInfo: {
    type: String,
    required: true
  },
  comments: [commentsSchema]

})
const Book = mongoose.model('Books', bookSchema);

const userSchema = new mongoose.Schema({  // username, password, friends, comments, likedBooks
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  friends: [],
  comments: [commentsSchema],
  likedBooks: [bookSchema]

})
/* Creating a model for the Users collection. */
const User = mongoose.model('Users', userSchema)


/* Exporting the Users, Comments, and Books models to be used in other files. */
module.exports = { User, Comment, Book };