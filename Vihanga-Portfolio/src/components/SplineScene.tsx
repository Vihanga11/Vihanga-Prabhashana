import React from 'react';

const SplineScene: React.FC = () => {
  return (
    <div className="h-screen w-full relative">
      <img
        src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba"
        alt="Hero background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" /> {/* Optional overlay */}
    </div>
  );
};

export default SplineScene;
