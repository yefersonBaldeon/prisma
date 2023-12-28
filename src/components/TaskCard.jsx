"use client";
import { useRouter } from "next/navigation";
import React from "react";

const TaskCard = ({ task }) => {
  const router = useRouter();
  return (
    <div
      className="bg-slate-400 p-3 hover:bg-slate-800 hover:cursor-pointer flex-col justify-center"
      onClick={() => router.push(`/tasks/edit/${task.id}`)}
    >
      <div className="flex justify-center">
        <div className="font-bold text-3xl ">{task.nombre}</div>
      </div>

      <div className="flex justify-center">
        <img
          className="w-7/12 h-60 object-cover"
          src={`/${task.foto}`}
          alt=""
        />
      </div>

      <div className="flex justify-center mb-2">
        {" "}
        <h1 className="text-blue-800">Description:</h1>
        {task.descripcion}
      </div>
      <div className="flex justify-center mb-2">
        <h1 className="text-blue-800">Price:</h1> {task.price}
      </div>

      <div className="flex justify-center mb-2">
        <h1 className="text-blue-800">Date:</h1>{" "}
        {new Date(task.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
};

export default TaskCard;
