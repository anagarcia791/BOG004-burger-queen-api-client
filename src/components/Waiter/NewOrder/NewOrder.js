// IMPORTACION HOOKS Y OTROS
import { useState, useEffect } from 'react';
import { CartProvider } from 'react-use-cart';
import { productFetch } from '../../../api/petitionsFetch.js'; 
import { ProductList }  from './ProductList.js';
import { OrderContainer } from './OrderContainer.js';

export const NewOrder = () => {

    // estructura de hook para deteccion de cambio en lista de products
    const [products, setProducts] = useState([]);

    const activeSession = JSON.parse(sessionStorage.user);
    const activeSessionToken = activeSession.accessToken;
    
    // estructura de hook para peticion de productos y agregar los mismos a la lista del hook L13 
    useEffect(() => {
      productFetch(activeSessionToken)
        .then((response) => {
          setProducts(response);
        })
        .catch((error)=>{
          console.log(error);
        })
    },[activeSessionToken, setProducts]);

  return (
      <>
        <CartProvider>
          <ProductList products={products}/>
          <OrderContainer activeSession={activeSession}/>
        </CartProvider>
      </>
  )
}
