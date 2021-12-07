import React from 'react'
//this is where we search for the movies
function SearchBar(props) {
    return (
   <div className= "searchBar">
        <input type="text" 
        value={props.value}
        onChange ={(event)=> props.setSearchTerm(event.target.value)}
        placeholder="Search for Movie" className="searchInput" /> 
       
   </div>
    )
}

export default SearchBar
