export interface TaskCardProps {
  id?: number;
  title: string;
  description: string;
  isCompleted?: boolean;
}

const TaskCard = ({ title, description }: TaskCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transform transition-transform hover:scale-105">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default TaskCard;
