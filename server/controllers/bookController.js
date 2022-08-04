const { User, Comment, Book } = require('../model/schema');

const bookController = {};

//req.body include email and isbn
bookController.like = async (req, res, next) => {
  // get the req body of book isbn identifier
  const { email, bookData } = req.body;
  console.log("!!! request body", email, bookData)
  await User.findOne({ email: email }).exec()
    .then(user => {
      const arrOfBooks = user.likedBooks;
      for (const book of arrOfBooks) {
        if (book.isbn === bookData.isbn) {
          console.log('book is already liked');
          res.locals.data = user; // $$$ frontend needs to know this
          return next();
        }
      }
    })
    .catch((err) => { console.log(`err in user.findOne bookcontroller.like err: ${err}`) });

  const likedBook = await Book.create({ name: bookData.name, description: bookData.description, isbn: bookData.isbn, imageUrl: bookData.imageUrl, moreInfo: bookData.moreInfo });
  await User.updateOne({ email: email }, { $push: { likedBooks: likedBook } }).exec()
    .then((doc) => { console.log(doc) })
    .catch((err) => { console.log(`err in user.updateOne bookcontroller.like err: ${err}`) });

  const updatedUser = await User.findOne({ email: email });
  res.locals.data = updatedUser;
  return next();
}

bookController.unLike = async (req, res, next) => {
  const { email, isbn } = req.body
  await User.findOneAndUpdate({ email: email }, { $pull: { likedBooks: { isbn: isbn } } }, { new: true }).exec()
    .then(data => {
      res.locals.data = data;
    })
    .catch(err => next({ message: { err: `err in removing book from likes: ${err}` } }))
  
  await Book.deleteOne({ isbn: isbn }).exec()
    .then((doc) => { console.log(doc); return next() })
    .catch((err) => next({ message: { err: `err in delete on in Book: ${err}` } }))
}

module.exports = bookController;