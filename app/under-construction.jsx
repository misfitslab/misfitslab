"use client";
import React from "react";

const UnderConstruction = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden text-center text-white">
      <style jsx>{`
        .animated-background {
          animation: background-transition 20s infinite ease-in-out;
          background-size: 400% 400%;
        }
        @keyframes background-transition {
          0% { background-color: #0c0a09; }
          25% { background-color: #1e1b4b; }
          50% { background-color: #1e011f; }
          75% { background-color: #040224; }
          100% { background-color: #0c0a09; }
        }
        .text-animation {
          animation: text-pulse 3s infinite ease-in-out;
        }
        @keyframes text-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.02); opacity: 0.95; }
        }
      `}</style>

      <div className="animated-background absolute inset-0 -z-10"></div>

      <div className="relative z-10 p-4">
        <h1 className="text-4xl font-extrabold uppercase tracking-widest md:text-5xl lg:text-6xl">
          Under Construction
        </h1>
        <h2 className="text-lg font-light text-gray-300 mt-4 md:text-xl lg:text-2xl tracking-wider text-animation">
          We’re building something extraordinary.
        </h2>
        <p className="text-sm text-gray-400 mt-2 font-thin md:text-base lg:text-lg">
          Stay tuned for the reveal.
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;