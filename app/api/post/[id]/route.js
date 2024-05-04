import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const id = params.id;

  try {
    const deletedPost = await prisma.post.delete({
      where: { id }
    });

    return NextResponse.json({ message: 'Post deleted', post: deletedPost });
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json({ message: 'Error deleting post' }, { status: 500 }); 
  }
}
