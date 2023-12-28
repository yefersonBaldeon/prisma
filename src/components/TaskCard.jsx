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
      <div className="flex"> <h1 className="text-blue-800">Description:</h1>{task.descripcion}</div>
      <div className="flex"><h1 className="text-blue-800">Price:</h1> {task.price}</div>


      
      <img src={`/${task.foto}`} alt="" />




      <div>{new Date(task.createdAt).toLocaleDateString()}</div>
    </div>
  );
};

export default TaskCard;
