import { useState } from "react";
import Button from "./Button";

const TaskInputForm = ({
  onAddTask,
}: {
  onAddTask: (title: string, description: string) => void;
}) => {
  const [titleInput, setTitleInput] = useState<string>("");
  const [descriptionInput, setDescriptionInput] = useState<string>("");

  const handleAdd = () => {
    if (!titleInput.trim() || !descriptionInput.trim()) {
      return;
    }

    onAddTask(titleInput, descriptionInput);

    setTitleInput("");
    setDescriptionInput("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-8">
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Task Title"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <textarea
          placeholder="Task Description"
          value={descriptionInput}
          onChange={(e) => setDescriptionInput(e.target.value)}
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[50px] sm:min-h-0"
        />
      </div>
      <Button
        onClick={handleAdd}
        className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105"
      >
        Add New Task
      </Button>
    </div>
  );
};

export default TaskInputForm;
