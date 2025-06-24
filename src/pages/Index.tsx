
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import TrailCard from '../components/TrailCard';
import TrailFilters from '../components/TrailFilters';
import { trails } from '../data/trails';

const Index = () => {
  const [filteredTrails, setFilteredTrails] = useState(trails);
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedAccessibility, setSelectedAccessibility] = useState('all');

  const handleFilterChange = (difficulty: string, accessibility: string) => {
    setSelectedDifficulty(difficulty);
    setSelectedAccessibility(accessibility);
    
    let filtered = trails;
    
    if (difficulty !== 'all') {
      filtered = filtered.filter(trail => trail.difficulty === difficulty);
    }
    
    if (accessibility !== 'all') {
      if (accessibility === 'children') {
        filtered = filtered.filter(trail => trail.suitableForChildren);
      } else if (accessibility === 'elderly') {
        filtered = filtered.filter(trail => trail.suitableForElderly);
      }
    }
    
    setFilteredTrails(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <HeroSection />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Discover Southern France's Summer Trails
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore breathtaking hiking trails perfect for summer adventures from June to September. 
            Each trail includes detailed information about difficulty, accessibility, and practical details.
          </p>
        </div>

        <TrailFilters 
          onFilterChange={handleFilterChange}
          selectedDifficulty={selectedDifficulty}
          selectedAccessibility={selectedAccessibility}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredTrails.map((trail) => (
            <TrailCard key={trail.id} trail={trail} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Plan Your Summer Adventure
            </h3>
            <p className="text-gray-600 mb-6">
              Southern France offers some of Europe's most spectacular hiking experiences. From the rugged peaks of the Pyrenees to the coastal paths of the Côte d'Azur, discover trails that suit every skill level and interest.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600">Curated Trails</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-green-600 mb-2">4</div>
                <div className="text-gray-600">Summer Months</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-gray-600">Verified Info</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
