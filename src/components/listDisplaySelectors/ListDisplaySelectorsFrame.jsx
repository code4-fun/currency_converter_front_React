import React from 'react';
import classes from './ListDisplaySelectors.module.scss'
import SelectedListPresentation
  from "./SelectedListPresentation";
import store from '../../store'
import SelectedNumberOfElements from "./SelectedNumberOfElements";
import SelectedSort from "./SelectedSort";

const ListDisplaySelectorsFrame = () => {
  return (
      <div>
        <div className={classes.listDisplaySelectorsFrame}>
          <SelectedListPresentation />
          {
            store.selectedListPresentation === 'Пагинация' &&
              <SelectedNumberOfElements />
          }
          <SelectedSort />
        </div>
      </div>
  );
};

export default ListDisplaySelectorsFrame;