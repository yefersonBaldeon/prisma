import React from "react";
import { prisma } from "@/libs/prisma.js";
import TaskCard from "@/components/TaskCard";

async function loadTasks() {
  const a = await prisma.task.findMany();
  return a;
}

const HomePage = async () => {
  const tasks = await loadTasks();

  return (
    <section className="">
      <div className="grid grid-cols-3 gap-10 m-10">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task}></TaskCard>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
