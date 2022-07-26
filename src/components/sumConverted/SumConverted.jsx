import React from 'react';
import classes from './SumConverted.module.scss'
import {observer} from "mobx-react-lite";
import store from '../../store'

const SumConverted = observer(() => {
  return (
      <div>
        <div className={classes.resultContainer}>
          <div className={['form-control'].join(' ')}>
            <h1>{store.sumConverted}</h1>
          </div>
          <div className={'form-control'}>
            <div className={classes.dateOfRate}>
              {
                store.sumConverted &&
                  <div>
                    <h5>по курсу ЦБ установленному на {store.dateTime}</h5>
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
  );
});

export default SumConverted;