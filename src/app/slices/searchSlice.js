
import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        criteria:""
    },
    reducers: {
        updateSearch: (action) => {
            return {
                criteria: action.payload
            }
        },
    }

});

export const { updateSearch } = searchSlice.actions;

export const searchData = (state) => state.search;

export default searchSlice.reducer;