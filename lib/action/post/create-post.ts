'use server';

import { z } from 'zod';
import { put } from '@vercel/blob';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';

const PostSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  userEmail: z.string().email({ message: "User email is required" }),
  imageUrl: z.string().min(1, { message: "Image is required" }),
  description: z.string().min(1, { message: "Description is required" }),
});

export const createPost = async (prevState: unknown, formData: FormData) => {
  const file = formData.get('imageUrl') as File;

  if (!file || !(file instanceof File) || file.size === 0) {
    return { error: { imageUrl: ["Image is required"] } };
  }

  try {
    const { url } = await put(file.name, file, {
      access: 'public',
      multipart: true,
    });

    formData.set('imageUrl', url);

    const validatedFields = PostSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!validatedFields.success) {
      return {
        error: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { title, userEmail, imageUrl, description } = validatedFields.data;

    await prisma.post.create({
      data: { title, imageUrl, userEmail, description },
    });


  } catch (error) {
    console.error('Error creating post:', error);
    return { message: 'Failed to create post' };
  }
  revalidatePath('/');
  redirect('/');
};
