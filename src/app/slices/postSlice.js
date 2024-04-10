import {createSlice} from '@reduxjs/toolkit';

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: {}
    },
    reducers: {
        deletingPost: (state = initialState, action) => {
            switch (action.type) {
                case 'DELETE_POST':
                    return {
                        ...state,
                        posts: state.posts.filter(post => post._id !== action.payload),
                    };
                default:
                    return state;
            }
        }
    }
});

export const {deletingPost} = postSlice.actions;

export const postData = (state) => state.post;

export default postSlice.reducer;