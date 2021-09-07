import React, { useState } from 'react';
import ProductState from './context/product/ProductState';
import Start from './components/Start';
import Store from './components/Store';
import Source from './components/Source';


const App = () => {
  
  const [started, changeStarted ] = useState(true)
  return (
    <ProductState>
      <Source/>
      {started 
      ? <Start  changeStarted={changeStarted} />
      : <Store/>}
      
    </ProductState>
  );
}

export default App;
