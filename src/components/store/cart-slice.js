/**
 * Redux toolkit import
 */
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount : 0,
    changed : false
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        /**
         * Replaces the cart state with the total quantity, items and total amount of items from the action payload.
         *
         * @param {object} state - The current state of the cart
         * @param {object} action - The action containing the payload
        */
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
            state.totalAmount = action.payload.totalAmount
        },

        /**
         * Adds an item to the shopping cart state, either by creating a new entry or updating an existing one.
         *
         * @param {Object} state - The current state of the shopping cart
         * @param {Object} action - The action containing the payload of the item to be added
        */
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.changed = true;
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
            state.totalAmount = state.totalAmount + newItem.price;
        },

        /**
         * Removes an item from the cart based on the given action.
         *
         * @param {object} state - The current state of the cart
         * @param {object} action - The action containing the payload
        */
        removeItemFromCart(state, action) {
            const id = action.payload;
            state.changed = true;
            const existingItem = state.items.find(item => item.id === id);
            console.log("existingItem =>",existingItem);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
            state.totalAmount = state.totalAmount - existingItem.price;
        },
    }
});


export const cartActions = cartSlice.actions

export default cartSlice.reducer