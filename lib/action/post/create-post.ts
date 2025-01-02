'use server'
import { z } from "zod";
import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

const PostSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    userEmail: z.string().min(1, { message: "User email is required" }),
    imageUrl: z
      .instanceof(File)
      .refine((file) => file.size > 0, { message: "Image is required" })
      .refine((file) => file.size < 4000000, {
        message: "Image must be less than 4MB",
      }),
      description: z.string().min(1, { message: "Description is required" }),
});

export const createPost = async (prevState: unknown, formData: FormData) => {
    const validatedFields = PostSchema.safeParse(
        Object.fromEntries(formData.entries())
    );

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { title, userEmail, imageUrl, description } = validatedFields.data;
    const { url } = await put(imageUrl.name, imageUrl, {
      access: "public",
      multipart: true,
    });

    try {
        await prisma.post.create({
            data:{
              title, imageUrl: url, userEmail, description
            }
          })        
    } catch (error) {
        console.log("Error " + error)
        return { message: "Failed to create data" };
    }
    revalidatePath("/");
    redirect("/");

}