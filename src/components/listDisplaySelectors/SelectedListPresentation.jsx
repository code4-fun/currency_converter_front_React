import React from 'react';
import Select from "../ui/Select";
import store from '../../store'
import {observer} from "mobx-react-lite";
import classes from './ListDisplaySelectors.module.scss'

const SelectedListPresentation = observer(() => {
  return (
      <div>
        <Select
            selectedOption={store.selectedListPresentation}
            options={[
              {value: 'Пагинация'},
              {value: 'Бесконечная прокрутка'}
            ]}
            onChange={i => store.setSelectedListPresentation(i)}
            additionalClasses={classes.listDisplaySelectors}
        />
      </div>
  );
});

export default SelectedListPresentation;