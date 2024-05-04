import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { title, content } = await request.json();

        const user = await prisma.user.create({
            data: {
                name: 'alex',
                email:'alex@gmail.com'
            }
        });

        const blogPost = await prisma.blogPost.create({
            data: {
                title,
                content,
                authorId: user.id
            }
        });

        return NextResponse.json({ blogPost });
    } catch (error) {
        console.error('Error adding blog post:', error);
        return NextResponse.error(new Error('Failed to add blog post'));
    }
}


