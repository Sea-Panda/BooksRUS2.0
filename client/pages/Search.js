import React, { useState, useEffect } from "react";
import Book from "../components/Book.js";
import Nav from "../components/Nav.js";

export default function search() {
  const [books, setBooks] = useState([]);
  const [start, setStart] = useState(0)

  // AIzaSyCII8FgqP289MMPY4J0rvIotk0mYT-eqLA
  async function queryBooks(keyWords) {
    console.log('start num: ', start) 
    // setStart(start + add) 
    if (start < 0) setStart(0)
    if (start > 35) setStart(35);
    console.log('start: ', start)
    const url = `https://www.googleapis.com/books/v1/volumes?&q=${keyWords}&startIndex=${start}&maxResults=40&key=AIzaSyCII8FgqP289MMPY4J0rvIotk0mYT-eqLA`;
    await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if(!queryArr) setBooks([])
        const queryArr = res.items;
        console.log("books query: ", queryArr);
        const newBooks = [];
        for (let i = 0; i < 5; i++) {
          if(queryArr[i].volumeInfo.industryIdentifiers && queryArr[i].volumeInfo.imageLinks)
            newBooks.push(<Book book={queryArr[i]} key={i} />);
        }
        setBooks(newBooks);
      })
      .catch((err) => console.log(`query api err: ${err}`));
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      queryBooks(document.getElementById("search").value);
    }
  };

  if(!books.length) setBooks([
    <div key={'no-books'}>
      <p>NO BOOKS FOUND!</p>
    </div>
  ]);

  // console.log(input)

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
            onChange={() => setStart(0)}
          ></input>
          <label htmlFor="search"></label>
          <button
            className="search-button"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setStart(0)
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
              <button
            className="search-button"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              if(start > 0) setStart(start - 5)
              queryBooks(document.getElementById("search").value);
            }}
          >
            Back
          </button>
          <button
            className="search-button"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setStart(start + 5)
              queryBooks(document.getElementById("search").value);
            }}
          >
            Next
          </button>
              {books}
              <button
            className="search-button"
            type="button"
            onClick={(e) => {
              queryBooks(document.getElementById("search").value, -5, e);
            }}
          >
            Back
          </button>
          <button
            className="search-button"
            type="button"
            onClick={(e) => {
              queryBooks(document.getElementById("search").value, 5, e);
            }}
          >
            Next
          </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
