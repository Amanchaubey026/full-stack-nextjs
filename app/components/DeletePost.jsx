'use client'; // Important!

import { useRouter } from "next/navigation";

const DeletePost = ({ postId }) => {
  const router = useRouter();

  async function handleClick() {
    try {
      await fetch(`api/post/${postId}`, {
        method: 'DELETE',
      });
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <button 
      onClick={handleClick} 
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
    >
      Delete Post
    </button>
  );
};

export default DeletePost;
