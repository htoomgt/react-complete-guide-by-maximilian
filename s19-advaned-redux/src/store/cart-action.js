import { uiActions, cartActions } from "./index";


/***
* Fetch Cart Data
*/
export const fetchCartData =  () => {
    return async (dispatch) => {
        const fetchData  =  async () => {
            const response  = await fetch(
                'https://react-http-tutorial-backend-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
                  method : 'GET',  
                })
            
            if(!response.ok){
                throw new Error('Could not fetch cart data!');
            }
            
            const data = await response.json();

            return data;

        }

        try{
            const cartData =  await fetchData();
            dispatch(cartActions.replaceCart(cartData));
            console.log("fetching cart data")


        }catch(error){
            dispatch(
                uiActions.showNotification({
                    status :  'error',
                    title :  'Error!',
                    message :  'Fetching cart data failed'

                })
            )
        }

        

    }
}

/***
 * Send Cart Data
 */
export const sendCartData = (cartData) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status : "pending",
            title : "Sending...",
            message :  "Sending cart data!",
          }));

          const sendRequest = async () => {
            const response = await fetch(
                "https://react-http-tutorial-backend-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
                {
                    method: "PUT",
                    body: JSON.stringify(cartData),
                }
            );
    
            if(!response.ok){
              throw new Error("Sending Cart Data Failed!")
            }
          }

          try {
            await sendRequest();
      
            dispatch(
              uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully!',
              })
            );
          } catch (error) {
            dispatch(
              uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!',
              })
            );
          }
          

        
    }
}