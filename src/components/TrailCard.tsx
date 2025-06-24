
import React from 'react';
import { MapPin, Mountain, Sun, CloudSun } from 'lucide-react';

interface Trail {
  id: number;
  name: string;
  location: string;
  difficulty: 'easy' | 'moderate' | 'difficult';
  distance: string;
  duration: string;
  elevation: string;
  suitableForChildren: boolean;
  suitableForElderly: boolean;
  roadAccess: boolean;
  gpsNetwork: boolean;
  mobileNetwork: boolean;
  description: string;
  highlights: string[];
  bestMonths: string[];
  image: string;
}

interface TrailCardProps {
  trail: Trail;
}

const TrailCard: React.FC<TrailCardProps> = ({ trail }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800 border-green-200';
      case 'moderate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'difficult': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '🟢';
      case 'moderate': return '🟡';
      case 'difficult': return '🔴';
      default: return '⚪';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Trail Image Header */}
      <div className="h-48 bg-gradient-to-r from-blue-400 to-green-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(trail.difficulty)}`}>
            {getDifficultyIcon(trail.difficulty)} {trail.difficulty.charAt(0).toUpperCase() + trail.difficulty.slice(1)}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold mb-1">{trail.name}</h3>
          <div className="flex items-center gap-1 text-sm">
            <MapPin size={14} />
            <span>{trail.location}</span>
          </div>
        </div>
      </div>

      {/* Trail Details */}
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-3">{trail.description}</p>
        
        {/* Trail Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-center gap-2">
            <Mountain size={16} className="text-gray-500" />
            <span className="text-gray-700">{trail.distance}</span>
          </div>
          <div className="flex items-center gap-2">
            <Sun size={16} className="text-gray-500" />
            <span className="text-gray-700">{trail.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <CloudSun size={16} className="text-gray-500" />
            <span className="text-gray-700">{trail.elevation}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">📅</span>
            <span className="text-gray-700">{trail.bestMonths.join(', ')}</span>
          </div>
        </div>

        {/* Accessibility Info */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Accessibility</h4>
          <div className="flex flex-wrap gap-2">
            <span className={`px-2 py-1 rounded-full text-xs ${trail.suitableForChildren ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-500'}`}>
              {trail.suitableForChildren ? '✅' : '❌'} Children
            </span>
            <span className={`px-2 py-1 rounded-full text-xs ${trail.suitableForElderly ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-500'}`}>
              {trail.suitableForElderly ? '✅' : '❌'} Elderly
            </span>
          </div>
        </div>

        {/* Practical Info */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Practical Information</h4>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className={`text-center p-2 rounded ${trail.roadAccess ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              <div className="font-medium">{trail.roadAccess ? '🚗 ✅' : '🚗 ❌'}</div>
              <div>Road Access</div>
            </div>
            <div className={`text-center p-2 rounded ${trail.gpsNetwork ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              <div className="font-medium">{trail.gpsNetwork ? '🛰️ ✅' : '🛰️ ❌'}</div>
              <div>GPS Coverage</div>
            </div>
            <div className={`text-center p-2 rounded ${trail.mobileNetwork ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              <div className="font-medium">{trail.mobileNetwork ? '📱 ✅' : '📱 ❌'}</div>
              <div>Mobile Network</div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Highlights</h4>
          <div className="flex flex-wrap gap-1">
            {trail.highlights.map((highlight, index) => (
              <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailCard;
