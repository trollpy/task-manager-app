import React from 'react';
import { Filter } from 'lucide-react';

const TaskFilter = ({ currentFilter, onFilterChange, taskCounts }) => {
  const filters = [
    { key: 'all', label: 'All', count: taskCounts.total },
    { key: 'active', label: 'Active', count: taskCounts.active },
    { key: 'completed', label: 'Completed', count: taskCounts.completed }
  ];

  return (
    <div className="flex items-center space-x-4 mb-6">
      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
        <Filter className="h-4 w-4" />
        <span className="text-sm font-medium">Filter:</span>
      </div>
      
      <div className="flex space-x-2">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            className={`filter-button ${currentFilter === filter.key ? 'active' : ''}`}
          >
            {filter.label}
            <span className="ml-2 px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-600 rounded-full">
              {filter.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskFilter;