
import React from 'react';

const SparkleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M19 3v4M17 5h4M14 7l-1.293-1.293a1 1 0 00-1.414 0L10 7M14 7l-1.293 1.293a1 1 0 01-1.414 0L10 7M14 7l-4 4M10 7l4 4m-4-4l-4 4m4-4l4-4" />
    </svg>
)

export const Header = (): React.ReactNode => {
  return (
    <header className="bg-brand-dark/80 backdrop-blur-sm border-b border-gray-700/50 sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="text-brand-primary">
              <SparkleIcon/>
            </div>
            <h1 className="text-xl font-semibold text-white">Imagen AI Generator</h1>
          </div>
        </div>
      </div>
    </header>
  );
};
