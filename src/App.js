import React from "react";
import Form from "./components/form/Form";
import Statistics from "./components/statistics/Statistics";

function App() {
  return (
    <div className="container">
      <h1>Конвертер валют</h1>
        <Form />
        <Statistics />
    </div>
  );
}

export default App;