import React from 'react';
import { Check, Trash2, Calendar } from 'lucide-react';
import Button from './ui/Button';
import Card from './ui/Card';

const TaskItem = ({ task, onToggleComplete, onDeleteTask }) => {
  return (
    <Card 
      className={`task-item animate-slide-up ${task.completed ? 'completed-task' : ''}`}
      hover={true}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 flex-1">
          <button
            onClick={() => onToggleComplete(task.id)}
            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
              task.completed
                ? 'bg-green-500 border-green-500 text-white'
                : 'border-gray-300 dark:border-gray-600 hover:border-green-500'
            }`}
          >
            {task.completed && <Check className="h-3 w-3" />}
          </button>
          
          <div className="flex-1">
            <p className={`text-gray-900 dark:text-white ${task.completed ? 'line-through opacity-60' : ''}`}>
              {task.text}
            </p>
            <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400 mt-1">
              <Calendar className="h-3 w-3" />
              <span>{new Date(task.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        <Button
          variant="danger"
          size="sm"
          onClick={() => onDeleteTask(task.id)}
          className="ml-4"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default TaskItem;