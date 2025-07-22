import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './store/postsSlice';
import PostsList from './components/PostsList';
import PostForm from './components/PostForm';
import { STATUS } from './constants/status';

function App() {
    const dispatch = useDispatch();
    const { status, error } = useSelector(state => state.posts);

    useEffect(() => {
        if (status === STATUS.IDLE) {
            dispatch(fetchPosts());
        }
    }, [status, dispatch]);

    return (
        <div className='max-w-6xl mx-auto p-5 font-sans'>
            <PostForm />
            {status === STATUS.LOADING && (
                <div className='text-center p-5 my-5 bg-blue-50 text-blue-600 rounded-lg'>
                    Loading posts...
                </div>
            )}
            {status === STATUS.FAILED && (
                <div className='text-center p-5 my-5 bg-red-50 text-red-600 rounded-lg'>
                    Error: {error}
                </div>
            )}
            {status === STATUS.SUCCEEDED && <PostsList />}
        </div>
    );
}

export default App;
