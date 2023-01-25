"use client";

import { trpc } from "@/utils/trpc";

export const Todos = () => {
  const hello = trpc.todos.getTodos.useQuery();
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <ul>
        {hello.data.map((row) => (
          <li key={row.id}>{row.task}</li>
        ))}
      </ul>
    </div>
  );
};
