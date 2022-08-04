import * as React from 'react';
import Comment from './Comments'
import { useStoreState, useStoreActions } from 'easy-peasy';

export default function ProfileBooks(props) {
  const user = useStoreState((state) => state.user);
  const updateUser = useStoreActions((actions) => actions.updateUser);

  async function handleUnlike(isbn) {
    const sendingInfo = { email: user.email, isbn: isbn };
    await fetch('/books/unLike', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sendingInfo)
    })
    .then((data) => data.json())
    .then((data) =>updateUser(data))
    .catch((err) => console.log(`error in handleUnlike: ${err}`))
  }

  return (
    <div>
      <h4>Book Name: {props.book.name} </h4>
      <img src={props.book.imageUrl} />
      <h4>ISBN-10: {props.book.isbn}</h4>
      <button className="removeBook" onClick={() => handleUnlike(props.book.isbn)}>Remove from favorites</button>

      <h4>Description: {props.book.description}</h4>
      <a href={props.book.moreInfo}>More Info</a>

      <br></br>

    </div >
  )
}