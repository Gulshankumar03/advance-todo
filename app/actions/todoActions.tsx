"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/lib/prismaDB";
import { auth } from "@clerk/nextjs";

const { userId } = auth();

export async function create(formData: FormData) {
  const input = formData.get("input") as string;

  if (!input.trim()) {
    return;
  }

  await prisma.todo.create({
    data: {
      title: input,
      userId: userId as string,
    },
  });

  revalidatePath("/");
}

export async function deleteTodo(formData: FormData) {
  const inputId = formData.get("inputId") as string;
  await prisma.todo.delete({
    where: { id: inputId },
  });
  revalidatePath("/");
}

export async function edit(formData: FormData) {
  const input = formData.get("newTitle") as string;
  const inputId = formData.get("inputId") as string;

  if (!input.trim()) {
    return;
  }
  await prisma.todo.update({
    where: {
      id: inputId,
    },
    data: {
      title: input,
    },
  });

  revalidatePath("/");
}
