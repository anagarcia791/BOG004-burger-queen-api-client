// import { Table } from 'react-bootstrap';
// IMPORTACION HOOKS Y OTROS
import { useCart } from 'react-use-cart';

// COMPONENTE PARA MOSTRAR PRODUCTOS A ORDENAR EN FORMA DE TABLA
export const ProductsToBill = () => {
  // se declaran los metodos para actualización de productos a ordenar
  const { items, updateItemQuantity, removeItem } = useCart();

  // captura de productos para facturar
  const prodsToBill = items.map((product, index) => {
    return (
      <table
        key={index}
        className='waiter-order-products'
        data-testid='orders-to-deliver'
      >
        <tbody>
          <tr>
            <td>
              <img src={product.image} style={{ width: '4rem' }} alt='' />
            </td>
            <td className='waiter-order-products-text'>{product.name}</td>
            <td className='waiter-order-products-btns-qty'>
              <button
                className='btn-decrease ms-2'
                onClick={() =>
                  updateItemQuantity(product.id, product.quantity - 1)
                }
                data-testid='decrease-quantity'
              >-</button>
              <p
                className='waiter-order-products-text'
                data-testid='product-quantity'
              >{product.quantity}</p>
              <button
                className='btn-increase ms-2'
                onClick={() =>
                  updateItemQuantity(product.id, product.quantity + 1)
                }
                data-testid='increase-quantity'
              >+</button>
            </td>
            <td className='waiter-order-products-text'>{product.price}</td>
            <td>
              <button
                className='btn-delete btn-light ms-2'
                onClick={() => removeItem(product.id)}
              >
                <i className='fa-regular fa-trash-can'></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  });

  return <>{prodsToBill}</>;
};
