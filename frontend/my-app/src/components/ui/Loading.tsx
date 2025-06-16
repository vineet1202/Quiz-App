import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-6">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
