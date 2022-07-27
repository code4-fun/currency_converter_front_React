import {useEffect} from "react";
import store from "../store";

export const useSelectedListPresentation = () => {

    useEffect(() => {
      if(store.selectedListPresentation === 'Бесконечная прокрутка'){
        store.setSelectedSortIsDisabled(true)
      } else {
        store.setSelectedSortIsDisabled(false)
      }
    }, [store.selectedListPresentation])
}