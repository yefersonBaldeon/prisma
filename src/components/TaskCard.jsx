"use client"
import { useRouter } from "next/navigation";
import React from "react";



const TaskCard = ({task}) => {

    const router = useRouter();
  return (
    <div
      className="bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer"
        onClick={() => router.push(`/tasks/edit/${task.id}`)}
    >
      <div className="font-bold text-3xl ">{task.nombre}</div>
      <div>{task.descripcion}</div>
      <div>{task.price}</div>
      <div>{task.foto}</div>
      <div>{new Date(task.createdAt).toLocaleDateString()}</div>
    </div>
  );
};

export default TaskCard;
