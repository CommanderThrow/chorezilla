import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import TaskCard, { type TaskCardProps } from "./components/TaskCard";

function App() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState<TaskCardProps[]>([]);
  const [taskIdCounter, setTaskIdCounter] = useState(1);

  const handleAddTask = () => {
    const newTask: TaskCardProps = {
      id: taskIdCounter,
      title: `New Task #${taskIdCounter}`,
      description:
        "This is a description for a new task. Click the button again to add another!",
      isCompleted: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskIdCounter((prev) => prev + 1);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button onClick={handleAddTask}>Add</Button>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map(({ id, title, description }) => (
          <TaskCard key={id} id={id} title={title} description={description} />
        ))}
      </div>
    </>
  );
}

export default App;
