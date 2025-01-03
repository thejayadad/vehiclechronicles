'use server';

import { z } from "zod";
import { put, del } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getPostById } from "./get-post-byid";

const EditSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  userEmail: z.string().email({ message: "User email is required" }),
  description: z.string().min(1, { message: "Description is required" }),
});

export const updatePost = async (
  id: string,
  prevState: unknown,
  formData: FormData
) => {
  // Extract image from FormData
  const imageFile = formData.get("imageUrl") as File | null;

  // Validate other fields
  const validatedFields = EditSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    console.error("Validation failed:", validatedFields.error.flatten().fieldErrors);
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { title, userEmail, description } = validatedFields.data;

  // Fetch existing post
  const existingPost = await getPostById(id);
  if (!existingPost) {
    console.error("Post not found with ID:", id);
    return { message: "Post not found" };
  }

  let imagePath = existingPost.imageUrl;

  // Handle image upload
  try {
    if (imageFile && imageFile.size > 0) {
      // Delete old image if it exists
      if (existingPost.imageUrl) {
        await del(existingPost.imageUrl);
      }

      // Upload new image
      const { url } = await put(imageFile.name, imageFile, {
        access: "public",
        multipart: true,
      });
      imagePath = url;
    }
  } catch (error) {
    console.error("Error handling image:", error);
    return { message: "Failed to handle image" };
  }

  // Update post in the database
  try {
    const updatedPost = await prisma.post.update({
      where: { id },
      data: {
        title, // Update title
        userEmail, // Update user email
        description, // Update description
        imageUrl: imagePath, // Update or retain image URL
      },
    });

    console.log("Post updated successfully:", updatedPost);
  } catch (error) {
    console.error("Error updating post:", error);
    return { message: "Failed to update post" };
  }

  // Revalidate and redirect
  revalidatePath("/");
  redirect("/");
};
