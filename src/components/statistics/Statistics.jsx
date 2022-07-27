import React, {useEffect, useRef} from 'react';
import store from '../../store'
import {observer} from "mobx-react-lite";
import classes from './Statistics.module.scss'
import ListDisplaySelectorsFrame
  from "../listDisplaySelectors/ListDisplaySelectorsFrame";
import PageButtons from "../pageButtons/PageButtons";
import {useObserver} from "../../hooks/useObserver";
import {useSelectedListPresentation} from "../../hooks/useSelectedListPresentation";

const Statistics = observer(() => {
  const lastElement = useRef()
  useObserver(lastElement)
  useSelectedListPresentation()

  useEffect(() => {
    if(store.selectedNumberOfElements === 'Показать все'){
      store.fetchHistoryPaged(1, store.historyTotalElements, store.selectedSort)
        .then(i => i)
    } else {
      store.fetchHistoryPaged(store.historyCurrentPage, store.selectedNumberOfElements, store.selectedSort)
        .then(i => i)
    }
  }, [store.historyCurrentPage, store.selectedNumberOfElements, store.selectedSort])

  return (
      <div>
        {
          store.displayHistory &&
            <div>
              <hr />
              <div>
                <ListDisplaySelectorsFrame />
              </div>
              <div className={['card', classes.historyTitle].join(' ')}>
                <div className={classes.historyContainer}>
                  <div className={classes.historyChild}>
                    Дата
                  </div>
                  <div className={classes.historyChild}>
                    Продажа
                  </div>
                  <div className={classes.historyChild}>
                    Покупка
                  </div>
                  <div className={classes.historyChild}>
                    Сумма продажи
                  </div>
                  <div className={classes.historyChild}>
                    Курс
                  </div>
                  <div className={classes.historyChild}>
                    Сумма покупки
                  </div>
                </div>
              </div>
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
                </div>)
              }
              <div ref={lastElement}></div>
              {
                store.selectedListPresentation === 'Пагинация'
                && store.selectedNumberOfElements !== 'Показать все' &&
                  <div>
                    <PageButtons
                      totalPages={store.historyTotalPages}
                      currentPage={store.historyCurrentPage}
                      changePage={page => store.setHistoryCurrentPage(page)}
                    />
                  </div>
              }
            </div>
        }
        {
          store.displayStat &&
            <div>
              <hr />
              <div className='card'>
                <div className={classes.statContainer}>
                  <div className={classes.statChild}>
                    Продажа
                  </div>
                  <div className={classes.statChild}>
                    Покупка
                  </div>
                  <div className={classes.statChild}>
                    <div className={classes.thirdStatChild}>
                      Сумма
                    </div>
                  </div>
                  <div className={classes.statChild}>
                    Средний курс
                  </div>
                </div>
              </div>
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