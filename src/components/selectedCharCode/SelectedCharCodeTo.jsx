import React, {useEffect} from 'react';
import Select from "../ui/Select";
import store from "../../store";
import {observer} from "mobx-react-lite";
import {useCharCodes} from "../../hooks/useCharCodes";
import {convert} from "../../utils";

const SelectedCharCodeTo = observer(() => {
  const [charCodes, fetchCharCodes, isFetching] = useCharCodes(store.charCodeTo)

  useEffect(() => {
    fetchCharCodes()
        .then(data => {
          return data
        })
  }, [])

  return (
      <div>
        {
          isFetching
              ?
              <Select />
              :
              <Select
                  options = {charCodes}
                  selectedOption={store.charCodeTo}
                  onChange = {i => {
                    store.setCharCodeTo(i)
                    convert()
                  }}
              />
        }
      </div>
  );
});

export default SelectedCharCodeTo;