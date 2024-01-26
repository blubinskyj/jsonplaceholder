import React from 'react';
import './Sort.css'

const Sort = ({sortAsc, sortDesc}) => {
  return (
      <div className='sort-container'>
        <button onClick={sortAsc} className='sort-button'>Sort Asc</button>
        <button onClick={sortDesc} className='sort-button'>Sort Desc</button>
      </div>
  );
};

export default Sort;
