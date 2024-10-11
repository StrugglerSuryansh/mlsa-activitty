import React from 'react';
import elem1 from '../images/elem1.png';
import elem2 from '../images/elem2.png';
import elem3 from '../images/elem3.png';

const ImagesSection = () => {
  const images = [
    { src: elem1, heading:"Step 1", text: "Complete the above modules within the given time, i.e. till 31st December 2024" },
    { src: elem2, heading:"Step 2", text: "Submit your details in the given form. The deadline is 31st December 2024." },
    { src: elem3, heading:"Step 3", text: "Win exciting prizes and goodies. Also, you can get a chance to work with MLSA MIET as a team member." },
  ];

  return (
    <section className="p-8">
      <h2 className="text-5xl font-bold mb-10 md:mb-28 text-center text-primary">Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className=" h-64 mb-6 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105">
              <img 
                src={image.src} 
                alt={`Step ${index + 1}`} 
                className="w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <h1 className='text-2xl text-primary font-black font-primary'>{image.heading}</h1>
            <div className="bg-orange p-4 rounded-lg shadow-md w-full transition-all duration-300 group-hover:shadow-lg group-hover:bg--50">
              <p className="text-center text-gray-700 transition-colors duration-300 group-hover:text-primary font-medium">
                {image.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImagesSection;