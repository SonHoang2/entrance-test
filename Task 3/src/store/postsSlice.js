import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../config/config';
import { STATUS } from '../constants/status';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get(API_URL);
    return response.data;
});

export const addPost = createAsyncThunk('posts/addPost', async postData => {
    const response = await axios.post(API_URL, postData);
    return response.data;
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: STATUS.IDLE,
        error: null,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchPosts.pending, state => {
                state.status = STATUS.LOADING;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = STATUS.SUCCEEDED;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = STATUS.FAILED;
                state.error = action.error.message;
            })
            .addCase(addPost.fulfilled, (state, action) => {
                state.posts.unshift(action.payload);
            });
    },
});

export default postsSlice.reducer;
