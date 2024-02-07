/**
 * Redux toolkit import
 */
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isCartVisible: false,
    notifications : null
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        /**
         * Toggles the visibility of the cart in the given state.
         *
         * @param {object} state - the state object
         * @return {void} 
        */
        toggle(state) {
            state.isCartVisible = !state.isCartVisible
        },

        /**
         * Updates the state with the given notifications.
         *
         * @param {type} state - the state object
         * @param {type} action - the action object
         * @return {type} undefined
        */
        showNotification(state, action){
            state.notifications = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;