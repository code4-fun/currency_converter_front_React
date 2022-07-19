import React from 'react';
import store from '../../store'
import {observer} from "mobx-react-lite";
import classes from './Statistics.module.scss'

const Statistics = observer(() => {
  return (
      <div>
        {
          store.displayHistory  &&
            <div>
              <hr />
              {store.history.map(i =>
                  <div className='card' key={i.id}>
                    <div className={classes.historyContainer}>
                      <div className={classes.historyChild}>
                        {i.dateTime}
                      </div>
                      <div className={classes.historyChild}>
                        {i.curFrom}
                      </div>
                      <div className={classes.historyChild}>
                        {i.curTo}
                      </div>
                      <div className={classes.historyChild}>
                        {i.sumBeforeConversion}
                      </div>
                      <div className={classes.historyChild}>
                        {i.exRate}
                      </div>
                      <div className={classes.historyChild}>
                        {i.sumAfterConversion}
                      </div>
                    </div>
                  </div>)}
            </div>
        }
        {
          store.displayStat &&
            <div>
              <hr />
              {store.stat.map(i =>
                  <div className='card' key={i.id}>
                    <div className={classes.statContainer}>
                       <div className={classes.statChild}>
                        {i.curFrom}
                      </div>
                      <div className={classes.statChild}>
                        {i.curTo}
                      </div>
                      <div className={classes.statChild}>
                        <div className={classes.thirdStatChild}>
                          {i.sumBeforeConversion}
                        </div>
                      </div>
                      <div className={classes.statChild}>
                        {i.averageExRate}
                      </div>
                    </div>
                  </div>)}
            </div>
        }
      </div>
  );
});

export default Statistics;