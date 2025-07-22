import { useSelector } from 'react-redux';
import PostItem from './PostItem';

const PostsList = () => {
    const posts = useSelector(state => state.posts.posts);

    return (
        <div>
            <h2 className='text-xl font-semibold text-gray-800 border-b-2 border-green-500 pb-2 mb-6'>
                Posts ({posts.length})
            </h2>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {posts.map(post => (
                    <PostItem key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default PostsList;
