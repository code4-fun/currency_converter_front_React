import React from 'react';
import Select from "../ui/Select";
import store from "../../store";
import classes from "./ListDisplaySelectors.module.scss";
import {observer} from "mobx-react-lite";

const SelectedSort = observer(() => {
  return (
    <div>
      <Select
        selectedOption={store.selectedSort}
        options={[
          {value: 'Сортировка', disabled: true},
          {value: 'По дате (возр)'},
          {value: 'По дате (убыв)'},
        ]}
        onChange={i => store.setSelectedSort(i)}
        additionalClasses={classes.listDisplaySelectors}
        isDisabled={store.selectedSortIsDisabled}
      />
    </div>
  );
});

export default SelectedSort;