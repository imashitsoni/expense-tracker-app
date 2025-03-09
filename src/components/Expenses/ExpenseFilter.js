import React from 'react';

import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
  
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  }
  
  const yearsOptions = props.yearsArr.map((ele) => {
    const key = 'key-'+ele;
    return(
      <option key={key} value={ele}>{ele}</option>
    )
  });

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {yearsOptions}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;