import React from 'react';
import Input from "../ui/Input";
import store from '../../store'
import {observer} from "mobx-react-lite";
import {sumToConvertHandler} from "../../utils";

const SumToConvert = observer(() => {
  return (
      <div>
        <Input
            value={store.sumToConvert}
            onInput={event => sumToConvertHandler(event)}
            type='number'
            placeholder='Сумма'/>
      </div>
  );
});

export default SumToConvert;