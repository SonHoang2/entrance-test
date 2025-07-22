import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../store/postsSlice';

const PostForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();

        if (title && body) {
            setIsSubmitting(true);
            try {
                await dispatch(
                    addPost({
                        title: title.trim(),
                        body: body.trim(),
                        userId: 1,
                    })
                ).unwrap();

                setTitle('');
                setBody('');
            } catch (error) {
                console.error('Failed to add post:', error);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className='bg-gray-100 p-5 mb-8 rounded-lg shadow-md'>
            <h2 className='mt-0 mb-4 text-xl font-semibold text-gray-800'>
                Add New Post
            </h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label
                        htmlFor='title'
                        className='block mb-2 font-bold text-gray-600'
                    >
                        Title:
                    </label>
                    <input
                        type='text'
                        id='title'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder='Enter post title'
                        required
                        className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors'
                    />
                </div>
                <div className='mb-4'>
                    <label
                        htmlFor='body'
                        className='block mb-2 font-bold text-gray-600'
                    >
                        Body:
                    </label>
                    <textarea
                        id='body'
                        value={body}
                        onChange={e => setBody(e.target.value)}
                        placeholder='Enter post content'
                        rows='4'
                        required
                        className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors resize-vertical'
                    />
                </div>
                <button
                    type='submit'
                    disabled={isSubmitting || !title.trim() || !body.trim()}
                    className='bg-green-500 text-white px-6 py-3 rounded cursor-pointer text-base font-medium transition-colors hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed'
                >
                    {isSubmitting ? 'Adding...' : 'Add Post'}
                </button>
            </form>
        </div>
    );
};

export default PostForm;
