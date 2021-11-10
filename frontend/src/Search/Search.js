import React, { Component } from 'react';


const Search = () => (
    <div style={{justifyContent: 'center' }}> 
        <div style={{ display: 'flex', justifyContent: 'center', margin: 50, padding: 50 }}><h1> Search Page </h1></div>
    <form action="/Products" method="get" style={{ display: 'flex', justifyContent: 'center', padding: 50 }}>
        
        <label htmlFor="header-search">
            
        </label>
      
        <input
            type="text"
            id="header-search"
            placeholder="Search Products"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
    </div>
    
);

export default Search;