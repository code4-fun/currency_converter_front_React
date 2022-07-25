import {useEffect, useRef} from "react";
import store from '../store'

export const useObserver = (ref) => {
  const observer = useRef()

  useEffect(() => {
    if(store.selectedListPresentation === 'Пагинация'){
      if(observer.current){
        observer.current.disconnect()
      }
      store.setHistoryCurrentPage(1)
      store.setSelectedNumberOfElements(20)
      return
    }

    const callback = (entries) => {
      if(entries[0].isIntersecting && store.historyCurrentPage < store.historyTotalPages){
        store.setHistoryCurrentPage(store.historyCurrentPage + 1)
      }
    }

    observer.current = new IntersectionObserver(callback)
    observer.current.observe(ref.current)
  }, [store.selectedListPresentation])
}