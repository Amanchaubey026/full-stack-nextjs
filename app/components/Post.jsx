import React from 'react';
import DeletePost from './DeletePost';

const Post = ({ id, title, content, authorName }) => {
  return (
    <div className="bg-gray-50 rounded-lg border border-gray-200 shadow-md p-5 m-4 hover:shadow-lg w-96">  
      <h4 className="text-3xl font-bold text-gray-800 mb-2">{title}</h4> 
      <p className="text-base text-gray-600 mb-4">{content}</p> 
      <p className="text-sm text-gray-500">By {authorName}</p>
      <div className="flex justify-end">
        <DeletePost postId={id}/>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"> 
          Read More
        </button>
      </div>
    </div>
  );
};

export default Post;
