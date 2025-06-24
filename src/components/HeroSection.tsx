
import React from 'react';
import { Mountain, Sun } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Mountain size={120} className="text-white" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <Sun size={100} className="text-yellow-300" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Southern France
          <span className="block text-3xl md:text-5xl text-yellow-300 mt-2">
            Summer Hiking Trails
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
          Discover breathtaking trails perfect for summer adventures from June to September
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <span className="text-sm font-medium">🌞 June - September</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <span className="text-sm font-medium">🥾 All Skill Levels</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <span className="text-sm font-medium">📍 GPS Verified</span>
          </div>
        </div>
        
        <button className="mt-8 bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
          Explore Trails Below
        </button>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
