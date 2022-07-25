import React from 'react';
import classes from './PageButtons.module.scss'

const PageButtons = ({totalPages, currentPage, changePage}) => {

  const getPagesArray = (totalPages) => {
    let result = [];
    for (let i = 0; i < totalPages; i++) {
      result.push(i + 1)
    }
    return result;
  }

  return (
    <div className = {classes.pageButtonsWrapper}>
      {
        getPagesArray(totalPages).map(i => <div
          key = {i}
          onClick={() => changePage(i)}
          className = {
            currentPage === i
              ? [classes.pageButton, classes.currentPageButton].join(' ')
              : classes.pageButton}>
          {i}
        </div>)
      }
    </div>
  );
};

export default PageButtons;