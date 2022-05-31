// IMPORTACION HOOKS Y OTROS
import { useState, useEffect } from 'react';
import { totalOrdersFetch } from '../../../api/petitionsFetch.js';
import { OrderLists } from './OrdersLists.js';
import { OrderToServer } from './OrderToServer.js';

// COMPONENTE PARA MOSTRAR PEDIDOS PENDIENTES Y PEDIDOS LISTOS PARA SERVIR
export const Orders = () => {

  // estructura de hook para traer las ordenes
  const [orders, setOrders] = useState([]);

  // token usuario activo
  const activeSessionToken = JSON.parse(sessionStorage.user).accessToken;

  // estructura de hook para peticion de ordenes
  useEffect(() => {
    totalOrdersFetch(activeSessionToken)
      .then((response) => {
        setOrders(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [activeSessionToken, setOrders]);

  return (
    <>
      <OrderLists orders={orders}/>
      <OrderToServer orders={orders} token={activeSessionToken}/>
    </>
  );
};
