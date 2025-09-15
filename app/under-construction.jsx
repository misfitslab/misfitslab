import React from 'react';

const UnderConstruction = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient-x text-white p-4">
      <div className="flex space-x-4 mb-8">
        {/* Gear icons with rotation animation */}
        <div className="w-20 h-20 border-4 border-white rounded-full animate-spin-slow"></div>
        <div className="w-16 h-16 border-4 border-dashed border-white rounded-full animate-spin"></div>
        <div className="w-12 h-12 border-4 border-white rounded-full animate-spin-reverse"></div>
      </div>
      <h1 className="text-4xl font-bold animate-bounce">🚧 Under Construction 🚧</h1>
      <p className="mt-4 text-center max-w-sm animate-pulse">
        We are working hard to bring something amazing! Stay tuned and check back soon.
      </p>
    </div>
  );
};

export default UnderConstruction;
