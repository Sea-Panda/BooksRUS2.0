import React, { useState, useEffect } from 'react';
import Book from '../components/Book.js'
import Nav from '../components/Nav.js'



export default function search() {
  // create a search box
  // start an api query
  //display the response from api
  // the book have like button and unlike button
  const [books, setBooks] = useState([])

  // AIzaSyCII8FgqP289MMPY4J0rvIotk0mYT-eqLA
  async function queryBooks(keyWords) {
    const url = `https://www.googleapis.com/books/v1/volumes?&q=${keyWords}&key=AIzaSyCII8FgqP289MMPY4J0rvIotk0mYT-eqLA`;
    await fetch(url)
      .then(res => res.json())
      .then(res => {
        const queryArr = res.items;
        console.log('books query: ', queryArr);
        const newBooks = [];
        console.log(queryArr)
        for (let i = 0; i < 7; i++) {
          newBooks.push(<Book book={queryArr[i]} key={i} />);
        }
        setBooks(newBooks);
      })
      .catch((err => console.log('query api err')));
  };

  return (

    <div>
      <Nav />
    <div className='searchBody'>

      <h1 className='searchbar'>Search for a book!</h1>
      <form className='searchbar'>
        <input type='text' id="search" placeholder='My favorite title'></input>
        <label htmlFor="search"></label>
        <button className='search-button' type='button' onClick={() => { queryBooks(document.getElementById('search').value) }}>Search</button>
      </form>



      <div className='favorite_books'>
        <div class="card text-center">
          <div class="card-body">
            <h3 class="card-title">Results</h3>
            <p class="card-text"></p>
            {books}
          </div>
        </div>
      </div>
      </div>
    </div>






  )

}