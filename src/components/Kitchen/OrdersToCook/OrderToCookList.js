// IMPORTACION HOOKS Y OTROS
import { statusDeliveringPetition } from '../../../api/petitionsFetch.js';
import { OrderProducts } from './OrderProducts.js';
import { Card } from 'react-bootstrap';

// COMPONENTE ORDERSTOCOOKLIST
export const OrderToCookList = ({ orders, token }) => {
  
  // estructura html de pedidos a preparar en cocina
  return (
    <>
      {orders
        .filter((ord) => ord.status === 'pending')
        .map((order) => (
          <Card className='kitchen-orders' key={order.id.toString()}>
            <div className='kitchen-orders-card-body'>
              <div className='card-details-1'>
                <p className='card-title'>Orden N° {order.id}</p>
                <p className='card-text'>Cliente: {order.client}</p>
                <p className='card-text' data-testid='date-entry'>
                  Hora orden: {order.dateEntry}
                </p>
              </div>
              <div className='card-details-2'>
                <p className='card-text'>Pedido:</p>
                <OrderProducts products={order.products} />
              </div>
            </div>
            <button onClick={() => statusDeliveringPetition(order.id, token)}>
              Preparado
            </button>
          </Card>
        ))}
    </>
  );
};
