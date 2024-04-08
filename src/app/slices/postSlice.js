import {createSlice} from '@reduxjs/toolkit';

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: {}
    },
    reducers: {
        addPost: (state, action) => {
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        },
        getPosts: (state, action) => {
            return {
                ...state,
                posts: action.payload
            }
        },
        deletePost: (state, action) => {
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== action.payload)
            }
        }
    }
});

export const {addPost, getPosts, deletePost} = postSlice.actions;

export const postData = (state) => state.post;

export default postSlice.reducer;