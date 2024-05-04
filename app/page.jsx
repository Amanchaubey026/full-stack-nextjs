import Link from "next/link";
import prisma from "../lib/prisma";
import Post from "./components/Post";
import Navbar from "./components/Navbar";

async function getPosts() {
  try {
    const posts = await prisma.blogPost.findMany({
      include: {
        author: {
          select: { name: true },
        },
      },
    });
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}


export default async function Home() {
  const posts = await getPosts();

  return (
    <>
    <Navbar/>
    <main className="w-full flex flex-col justify-center items-center text-5xl h-screen">
        <Link href={'/add-post'}>Add Post</Link>
        <h1 className="my-5">Feed</h1>

        {/* Grid Container */}
        <div className="container mx-auto px-5 my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              authorName={post.author.name}
            />
          ))}
        </div>
      </main>
      </>
  );
}
