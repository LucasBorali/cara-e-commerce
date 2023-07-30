import { cartActions } from './cart-slice';

export const fetchCartData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch(
        'https://cara-e-commerce-default-rtdb.firebaseio.com/cart.json'
      );

      if (!response.ok) {
        throw new Error('coud not fetch cart data!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
        })
      );
    } catch (error) {
      // console.log('cuido depois');
    }
  };
};

export const sendCartData = cart => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        'https://cara-e-commerce-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({ items: cart.items }),
        }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed');
      }
    };
    try {
      await sendRequest();
    } catch (error) {
      console.log('take care later');
    }
  };
};
