import React from 'react';
import Api from './Api';
import Coin from './coin';
import Console from './console';
import Kite from './kite';
import Mobile from './mobile';
import Universe from './universe';

function Products() {
  return (
    <div>
      <Kite />
      <Console />
      <Coin />
      <Api />
      <Mobile />
      <Universe />
        
    </div>
  );
}       

export default Products;