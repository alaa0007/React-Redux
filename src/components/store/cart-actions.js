/**
 * Component import
 */
import { cartActions } from './cart-slice';
import { uiActions } from './ui-slice'


export const fetchCartData = () => {
    return async (dispatch) => {
        const getCartData = async () => {
            const response = await fetch('https://react-redux-8e6f8-default-rtdb.firebaseio.com/cart.json');
            if(!response.ok){
                throw new Error('Sending cart data failed!')
            }    
            const data = await response.json();
            return data;
        }
                    

        try{
            const cartData = await getCartData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity || 0,
                totalAmount: cartData.totalAmount || 0
            }));
        }catch(error){
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
            }))
        }
    }
}



/**
 * Asynchronously sends the cart data to a remote server and handles the UI
 * notifications based on the response.
 *
 * @param {Object} cartData - The cart data to be sent to the server
 * @return {Object} An object containing the type and payload of the action
 */
export const sendCartData = (cart) => {

    return async (dispatch) =>{
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!'
        }))

        const sendRequest = async () => {
            const reponse = await fetch('https://react-redux-8e6f8-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items || [],
                    totalQuantity: cart.totalQuantity || 0,
                    totalAmount: cart.totalAmount || 0
                })
            })
            
            if(!reponse.ok){
            throw new Error('Sending cart data failed!')
            }        
        }

        try {
            await sendRequest();
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully!'
            }))
        }catch(error){
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
            }))
        }

    }
}