
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState('');
  console.log("Seacrch", search)
  const dataLists=[
    'Central Delhi',
    'East Delhi',
    'New Delhi',
    'North Delhi',
    'North East Delhi',
    'North West Delhi',
    'South Delhi',
    'South West Delhi',
    'West Delhi',
];

 const handleChange=(e)=>{
     setSearch(e.target.value);
 }
 const filteredSearch=dataLists.filter((data)=>data.toLowerCase().includes(search.toLowerCase()));
console.log("FilteredSearch ",filteredSearch,filteredSearch.length);

  return (
    <div>
      <form className="form">
        <input
          type="search"
          value={search}
          onChange={handleChange}
          list="suggestions"
          placeholder="Enter a city"
        />
        <datalist id="suggestions">
          {filteredSearch.map((value, index) => (
            <option key={index} value={value} />
          ))}
        </datalist>
      </form>
    </div>
  )
}

export default App
