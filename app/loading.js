import React from 'react';

export const metadata = {
  title: 'Loading',
  description: 'Waiting for pages to load',
};


const Loading = () => {

  return (

        <div className='absolute top-0 flex items-center justify-center w-full min-h-screen bg-black'>
          <div className='loading-spinner'></div>
        </div>

  );
};

export default Loading;
