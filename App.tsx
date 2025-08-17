
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { PromptForm } from './components/PromptForm';
import { ImageDisplay } from './components/ImageDisplay';
import { ErrorAlert } from './components/ErrorAlert';
import { generateImage } from './services/geminiService';

function App(): React.ReactNode {
  const [prompt, setPrompt] = useState<string>('');
  const [lastSubmittedPrompt, setLastSubmittedPrompt] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!prompt || isLoading) return;

    setIsLoading(true);
    setError(null);
    setImageUrl(null);
    setLastSubmittedPrompt(prompt);

    try {
      const generatedImageUrl = await generateImage(prompt);
      setImageUrl(generatedImageUrl);
    } catch (err) {
      console.error(err);
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(`Failed to generate image. ${errorMessage}. Please check your API key and try again.`);
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isLoading]);

  return (
    <div className="min-h-screen bg-brand-dark text-brand-light font-sans flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 flex flex-col justify-center animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Unleash Your Creativity</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Describe any scene, object, or idea, and watch as Imagen 3 brings it to life in stunning detail.
            </p>
            <PromptForm
              prompt={prompt}
              setPrompt={setPrompt}
              onSubmit={handleSubmit}
              isLoading={isLoading}
            />
            {error && <ErrorAlert message={error} />}
          </div>
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <ImageDisplay
              isLoading={isLoading}
              imageUrl={imageUrl}
              prompt={lastSubmittedPrompt}
            />
          </div>
        </div>
      </main>
       <footer className="text-center p-4 text-gray-500 text-sm">
          <p>Powered by Google Imagen 3 & Gemini API</p>
        </footer>
    </div>
  );
}

export default App;
