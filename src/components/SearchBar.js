import { useState } from "react";
import './searchBar.css';

function SearchBar({searchImage}) {

    const [text, setText] =  useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        searchImage(text);
    }

    return (
      <div className="search-container">
        <div className="search-text">Search for any image!</div>
        <form onSubmit={handleSubmit}>
            <input className="search-bar" value={text} onChange={handleChange}/>
        </form>
      </div>
    );
  }
  
  export default SearchBar;
  