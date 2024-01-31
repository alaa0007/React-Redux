/**
 * Redux toolkit import
 */
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isCartVisible: false
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
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;