import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma.js";

export async function GET() {
  const tasks = await prisma.task.findMany();
  console.log(tasks);
  return NextResponse.json(tasks);
}

export async function POST(request) {
  const data = await request.json();

  const newTask = await prisma.task.create({
    data: {
      nombre: data.nombre,
      descripcion: data.descripcion,
      price: data.price,
      foto: data.foto,
    },
  });

  return NextResponse.json(newTask);
}
