import React from 'react';
import Select from "../ui/Select";
import store from '../../store'
import {observer} from "mobx-react-lite";
import classes from './ListDisplaySelectors.module.scss'

const SelectedNumberOfElements = observer(() => {
  return (
    <div>
      <Select
        selectedOption={store.selectedNumberOfElements}
        options={[
          {value: 20},
          {value: 30},
          {value: 50},
          {value: 'Показать все'}
        ]}
        onChange={i => {
          store.setSelectedNumberOfElements(i)
          store.setHistoryCurrentPage(1)
        }}
        additionalClasses={classes.listDisplaySelectors}
      />
    </div>
  );
});

export default SelectedNumberOfElements;