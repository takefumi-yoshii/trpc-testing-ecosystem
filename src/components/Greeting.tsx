"use client";

import { trpc } from "@/utils/trpc";

export const Greeting = () => {
  const { data: message } = trpc.greeting.hello.useQuery();
  if (!message) {
    return <div>Loading...</div>;
  }
  return <p>{message}</p>;
};
