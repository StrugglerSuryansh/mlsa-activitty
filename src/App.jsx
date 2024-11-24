import React from 'react';
import Header from './components/Header';
import Modules from './components/Modules';
import ImagesSection from './components/ImagesSection';
import Footer from './components/Footer';
import ActivityZone from './components/ActivityZone';
import Over from './components/Over';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Over/>
      
      {/* <Header />
      <ActivityZone /> 
      <main className="flex flex-col items-center justify-center flex-grow">
        <Modules />
        <ImagesSection />
      </main>
      <Footer /> */}
    </div>
  );
};

export default App;
