
import React from 'react';

interface ErrorAlertProps {
  message: string;
}

export const ErrorAlert = ({ message }: ErrorAlertProps): React.ReactNode => {
  return (
    <div className="bg-red-900/50 border border-red-700 text-red-200 px-4 py-3 rounded-lg relative mt-4 animate-fade-in" role="alert">
      <strong className="font-bold">Error: </strong>
      <span className="block sm:inline">{message}</span>
    </div>
  );
};
