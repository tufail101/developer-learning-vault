// This example outlines the typed pieces of a small API.

type Task = {
  id: number;
  title: string;
  done: boolean;
};

type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

function listTasks(): ApiResponse<Task[]> {
  return {
    success: true,
    data: [
      { id: 1, title: "Read TypeScript chapter", done: false },
      { id: 2, title: "Type one API route", done: true },
    ],
  };
}

console.log(listTasks());
