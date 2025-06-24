
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapPin } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface Trail {
  id: number;
  name: string;
  location: string;
  difficulty: 'easy' | 'moderate' | 'difficult';
  distance: string;
  duration: string;
  coordinates: [number, number];
}

interface InteractiveMapProps {
  trails: Trail[];
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ trails }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '#10b981';
      case 'moderate': return '#f59e0b';
      case 'difficult': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const createCustomIcon = (difficulty: string) => {
    const color = getDifficultyColor(difficulty);
    return L.divIcon({
      className: 'custom-marker',
      html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    });
  };

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={[43.6, 3.2]} // Center of Southern France
        zoom={6}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {trails.map((trail) => (
          <Marker
            key={trail.id}
            position={trail.coordinates}
            icon={createCustomIcon(trail.difficulty)}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-lg mb-1">{trail.name}</h3>
                <p className="text-gray-600 mb-2">{trail.location}</p>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    trail.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                    trail.difficulty === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {trail.difficulty.charAt(0).toUpperCase() + trail.difficulty.slice(1)}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  <p>{trail.distance} • {trail.duration}</p>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;
