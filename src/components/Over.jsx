import React, { useState } from "react";

const Over = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      window.open("https://linktr.ee/mlsamiet", "_blank");
    }, 300); // Animation duration before opening the link
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 text-center sm:px-8 md:px-12">
      <h1 className="mb-4 text-3xl font-bold sm:text-4xl text-primary">
        Thank You for Participating in the November Session of Activity Zone!
      </h1>
      <p className="mb-6 text-base sm:text-lg text-primary sm:mb-8">
        We hope you had an enriching and exciting time. Stay tuned, and we'll see you in the next session soon! Keep an eye out for updates.
      </p>
      <button
        onClick={handleClick}
        className={`px-8 py-4 sm:px-10 sm:py-5 font-medium text-white transition rounded-lg shadow bg-primary hover:bg-primary-dark ${
          isClicked ? "scale-95" : "scale-100"
        }`}
      >
        Visit Socials
      </button>
    </div>
  );
};

export default Over;
