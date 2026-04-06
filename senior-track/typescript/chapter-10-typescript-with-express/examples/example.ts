// This example models typed Express-style request data without needing a full server.

type TaskParams = {
  id: string;
};

type TaskBody = {
  title: string;
  done: boolean;
};

function updateTask(params: TaskParams, body: TaskBody) {
  return {
    id: Number(params.id),
    title: body.title,
    done: body.done,
  };
}

const updatedTask = updateTask(
  { id: "4" },
  { title: "Review TypeScript routes", done: true }
);

console.log(updatedTask);
