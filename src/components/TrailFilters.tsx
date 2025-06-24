
import React from 'react';

interface TrailFiltersProps {
  onFilterChange: (difficulty: string, accessibility: string) => void;
  selectedDifficulty: string;
  selectedAccessibility: string;
}

const TrailFilters: React.FC<TrailFiltersProps> = ({ 
  onFilterChange, 
  selectedDifficulty, 
  selectedAccessibility 
}) => {
  const handleDifficultyChange = (difficulty: string) => {
    onFilterChange(difficulty, selectedAccessibility);
  };

  const handleAccessibilityChange = (accessibility: string) => {
    onFilterChange(selectedDifficulty, accessibility);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-gray-800 mb-3">Filter by Difficulty</h3>
          <div className="flex gap-2">
            <button
              onClick={() => handleDifficultyChange('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedDifficulty === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Levels
            </button>
            <button
              onClick={() => handleDifficultyChange('easy')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedDifficulty === 'easy' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🟢 Easy
            </button>
            <button
              onClick={() => handleDifficultyChange('moderate')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedDifficulty === 'moderate' 
                  ? 'bg-yellow-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🟡 Moderate
            </button>
            <button
              onClick={() => handleDifficultyChange('difficult')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedDifficulty === 'difficult' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🔴 Difficult
            </button>
          </div>
        </div>

        <div className="h-px md:h-12 w-full md:w-px bg-gray-200"></div>

        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-gray-800 mb-3">Filter by Accessibility</h3>
          <div className="flex gap-2">
            <button
              onClick={() => handleAccessibilityChange('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedAccessibility === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Trails
            </button>
            <button
              onClick={() => handleAccessibilityChange('children')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedAccessibility === 'children' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              👶 Child-Friendly
            </button>
            <button
              onClick={() => handleAccessibilityChange('elderly')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedAccessibility === 'elderly' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              👴 Senior-Friendly
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailFilters;
