import { auth } from '../firebaseConfig';
import { cartActions } from './cart-slice';

export const fetchCartData = () => {
  return async dispatch => {
    try {
      await new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          unsubscribe();
          if (user) {
            resolve();
          } else {
            reject(new Error('User not authenticated.'));
          }
        });
      });

      const fetchData = async () => {
        const user = auth.currentUser;
        const response = await fetch(
          `https://cara-e-commerce-default-rtdb.firebaseio.com/${user.uid}.json`
        );

        if (!response.ok) {
          throw new Error('coud not fetch cart data!');
        }

        const data = await response.json();

        return data;
      };

      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || ['empty'],
        })
      );
    } catch (error) {
      console.log('cuido depois');
    }
  };
};

export const sendCartData = cart => {
  return async () => {
    const sendRequest = async () => {
      const user = auth.currentUser;
      const response = await fetch(
        `https://cara-e-commerce-default-rtdb.firebaseio.com/${user.uid}.json`,
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
