const PostItem = ({ post }) => {
    return (
        <div className='bg-white p-5 rounded-lg shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg'>
            <h3 className='mt-0 mb-3 text-gray-800 text-lg leading-snug font-medium'>
                {post.title}
            </h3>
            <p className='text-gray-600 leading-relaxed mb-4'>{post.body}</p>
            <div className='flex justify-between text-xs text-gray-400 border-t border-gray-200 pt-3'>
                <span>ID: {post.id}</span>
                <span>User ID: {post.userId}</span>
            </div>
        </div>
    );
};

export default PostItem;
