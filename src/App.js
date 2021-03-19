import React from 'react';
import './App.css';
import OrderBasket from "./Components/OrderBasket/OrderBasket";
import OrderForm from "./Components/OrderForm/OrderForm";

function App() {

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
      <OrderBasket />
      <OrderForm />
    </>
  );
}

export default App;
