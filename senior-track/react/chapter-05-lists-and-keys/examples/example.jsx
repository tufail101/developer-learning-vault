const tasks = [
  { id: 1, title: "Read notes", done: true },
  { id: 2, title: "Build example", done: false },
];

export default function TaskList() {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title} {task.done ? "Done" : "Pending"}
        </li>
      ))}
    </ul>
  );
}
