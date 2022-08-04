import * as React from "react";
import Comment from "./Comments";
import { useStoreState, useStoreActions } from "easy-peasy";

export default function Book(props) {
  //import user from store
  //fetch req to /like. body should be email and bookdata {name, description,isbn,imgUrl, moreInfo}. probably need to refactor post('/like ) to fit w frontend
  const user = useStoreState((state) => state.user);
  const updateUser = useStoreActions((actions) => actions.updateUser);
  const likedBooks = useStoreState((state) => state.userLikedBooks);
  const updateLikedBooks = useStoreActions(
    (actions) => actions.updateLikedBooks
  );
  const imageUrls = Object.values(props.book.volumeInfo.imageLinks);
  const bookData = {
    name: props.book.volumeInfo.title,
    description: props.book.volumeInfo.description,
    isbn: props.book.volumeInfo.industryIdentifiers[0].identifier,
    imageUrl: imageUrls[0],
    moreInfo: props.book.volumeInfo.infoLink,
  };

  console.log(props);

  async function handleLike() {
    console.log("user????", user);

    /* SendingInfo is an object that contains the email of the user and the bookData. */
    const sendingInfo = { email: user.email, bookData: bookData };
    const result = await fetch("/books/like", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sendingInfo),
    })
      .then((data) => data.json())
      .then((data) => {
        updateUser(data);
      })
      .catch((err) => console.log(`error in /books/like: ${err}`));
  }

  let likedOrNot = false;
  // if(user.likedBooks.includes()user.likedBooks.isbn) => if truthy, change button to heart shaped button?

  for (let i = 0; i < user.likedBooks.length; i++) {
    if (user.likedBooks[i].isbn === bookData.isbn) {
      likedOrNot = true;
      break;
    }
  }

  let ourButton;

  if(likedOrNot) {
    // ourButton = <p>already liked</p>
    ourButton = <button className='likedButton'>Liked!</button>
  }
  else {
    ourButton = <button className='likeButton' onClick={handleLike}> Like</button>;
  }

  console.log("THIS IS USER", user);
  console.log("THIS IS USER LIKEDBOOKS ARRAY", user.likedBooks);

  return (
    <div>
      <h4>Book Name: {bookData.name} </h4>
      <img src={imageUrls[0]} />
      <h4>ISBN-10: {bookData.isbn}</h4>

      <div id='bookDes'>Description: {bookData.description}</div>
      <a href={bookData.moreInfo}>More Info</a>
      <br></br>
      {ourButton}
      {/* <button onClick={handleLike}> Like</button> */}
      <br></br><hr/>
    </div>
  );
}
