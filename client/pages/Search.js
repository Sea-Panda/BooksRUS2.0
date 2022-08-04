import React, { useState, useEffect } from "react";
import Book from "../components/Book.js";
import Nav from "../components/Nav.js";

export default function search() {
  const [books, setBooks] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);
  const [checkFetch, setCheckFetch] = useState(false);

  //AIzaSyDk1AqjQyg5hhiyKRk2NmXkjKMdQ5Fg4ek - api key from Kevin
  async function queryBooks(keyWords) {
    const url = `https://www.googleapis.com/books/v1/volumes?&q=${keyWords}&maxResults=40&key=AIzaSyDk1AqjQyg5hhiyKRk2NmXkjKMdQ5Fg4ek`;
    await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (!queryArr) setBooks([]);
        const queryArr = res.items;
        console.log("books query: ", queryArr);
        const newBooks = [];
        for (let i = 0; i < queryArr.length; i++) {
          if (
            queryArr[i].volumeInfo.industryIdentifiers &&
            queryArr[i].volumeInfo.imageLinks
          )
            newBooks.push(<Book book={queryArr[i]} key={i} />);
        }
        setBooks(newBooks);
      })
      .catch((err) => console.log(`query api err: ${err}`));

    setCheckFetch(true);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setStart(0);
      setEnd(4);
      queryBooks(document.getElementById("search").value);
    }
  };

  if (!books.length) {
    setBooks([<div key={"no-books"}></div>]);
    setCheckFetch(false);
  }

  if (checkFetch && !books.length) {
    setBooks([
      <div key={"no-books-found"}>
        <p>NO BOOKS FOUND!</p>
      </div>,
    ]);
  }

  let buttons = <div></div>;

  if (checkFetch && books.length) {
    buttons = (
      <div>
        <button
          className="search-button"
          type="button"
          onClick={() => {
            if (start > 0) {
              setStart(start - 5);
              setEnd(end - 5);
            }
          }}
        >
          Back
        </button>
        <button
          className="search-button"
          type="button"
          onClick={() => {
            if (end < books.length - 1) {
              setStart(start + 5);
              setEnd(end + 5);
            }
          }}
        >
          Next
        </button>
      </div>
    );
  }

  return (
    <div>
      <Nav />
      <div className="searchBody">
        <h1 className="searchbar">Search for a book!</h1>
        <form className="searchbar">
          <input
            onKeyDown={handleKeyDown}
            type="text"
            id="search"
            placeholder="My favorite title"
          ></input>
          <label htmlFor="search"></label>
          <button
            className="search-button"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setStart(0);
              setEnd(4);
              queryBooks(document.getElementById("search").value);
            }}
          >
            Search
          </button>
        </form>
        <div className="favorite_books">
          <div className="card text-center">
            <div className="card-body">
              <h3 className="card-title">Results</h3>
              <p className="card-text"></p>
              {buttons}
              {books.slice(start, end)}
              {buttons}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
