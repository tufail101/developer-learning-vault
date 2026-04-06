// React example with state and effect.
useEffect(() => {
  fetch("/api/tasks")
    .then((response) => response.json())
    .then((data) => setTasks(data));
}, []);
