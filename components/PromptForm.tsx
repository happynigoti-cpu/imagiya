
import React from 'react';
import { Spinner } from './Spinner';

interface PromptFormProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

export const PromptForm = ({ prompt, setPrompt, onSubmit, isLoading }: PromptFormProps): React.ReactNode => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="relative">
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., A majestic lion wearing a crown, cinematic lighting"
          className="w-full h-32 p-4 pr-12 text-base bg-gray-800 border-2 border-gray-700 rounded-lg text-brand-light placeholder-gray-500 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition duration-200 resize-none"
          disabled={isLoading}
        />
      </div>
      <button
        type="submit"
        disabled={isLoading || !prompt}
        className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-primary hover:bg-opacity-90 disabled:bg-gray-600 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-brand-primary transition-all duration-300"
      >
        {isLoading ? (
          <>
            <Spinner />
            Generating...
          </>
        ) : (
          'Generate Image'
        )}
      </button>
    </form>
  );
};
