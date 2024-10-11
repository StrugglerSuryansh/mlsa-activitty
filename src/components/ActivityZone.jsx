import React from 'react';
import logo from '../images/logo.png'
const ActivityZone = () => {
  return (
    <div id='ImagesSection' className="min-h-screen flex flex-col p-8 mb-8 scroll-smooth">
      <header className="flex justify-between items-center mb-8">
       
      </header>
      
      <main className="flex-grow flex md:flex-row flex-col items-center justify-center">
        <div className="w-1/3 hidden md:flex justify-end items-center">
          <img src={logo} alt="3D Character" className="w-3/4" id='logo' />
        </div>
        
        <div className="md:w-2/3 md:pl-8 flex flex-col items-center justify-center gap-5">
          <h1 className="text-primary text-3xl lg:text-7xl font-bold mb-4 text-center font-primary">THE ACTIVITY ZONE</h1>
          <a className="bg-secondary text-white px-6 py-3 rounded-md flex items-center text-xs md:text-base font-primary" href='#modules'>
            October 24 - December 24
            {/* You can add a down arrow here as a simple text or an emoji if needed */}
          </a>
        </div>
      </main>
    </div>
  );
};

export default ActivityZone;
