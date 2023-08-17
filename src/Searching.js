import React, { useState } from 'react'

export default function Searching() {
    const itemList = [this.props.coins]
    const [filteredList,setFilteredList]=new useState(itemList);

    const filterSearch = (event) =>{
        const query = event.target.value;
        var updateList = [...itemList];
        updateList = updateList.filter((item)=>{
            return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        setFilteredList(updateList);
    }; 
  return (
    <div >
      <div >       
        <input  onChange={filterSearch} />
      </div>
      <div >
        <ol>
          {filteredList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}
