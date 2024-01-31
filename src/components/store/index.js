/**
 * Redux toolkit import
 */
import { configureStore } from '@reduxjs/toolkit';

/**
 * Slices import
 */
import uiReducer from './ui-slice';
import cartReducer from './cart-slice';

const store = configureStore({
    reducer: { ui: uiReducer, cart : cartReducer },
});


export default store;