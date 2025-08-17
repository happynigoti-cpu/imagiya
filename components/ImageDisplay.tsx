
import React from 'react';
import { Spinner } from './Spinner';

interface ImageDisplayProps {
  isLoading: boolean;
  imageUrl: string | null;
  prompt: string;
}

const Placeholder = () => (
  <div className="flex flex-col items-center justify-center h-full text-gray-500">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
    <p className="text-center">Your generated image will appear here.</p>
  </div>
);

export const ImageDisplay = ({ isLoading, imageUrl, prompt }: ImageDisplayProps): React.ReactNode => {
  return (
    <div className="w-full aspect-square bg-gray-800/50 border-2 border-dashed border-gray-700 rounded-xl flex items-center justify-center p-2 transition-all duration-300">
      {isLoading && (
        <div className="flex flex-col items-center justify-center text-brand-light">
          <Spinner size="h-10 w-10" />
          <p className="mt-4 text-lg animate-pulse-fast">Creating your vision...</p>
        </div>
      )}
      {!isLoading && imageUrl && (
        <img
          src={imageUrl}
          alt={prompt}
          className="w-full h-full object-contain rounded-lg animate-fade-in"
        />
      )}
      {!isLoading && !imageUrl && <Placeholder />}
    </div>
  );
};
