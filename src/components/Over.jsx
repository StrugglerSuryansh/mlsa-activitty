import React, { useState } from "react";

const Over = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      window.open("https://linktr.ee/mlsa_miet", "_blank");
    }, 300); // Animation duration before opening the link
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="mb-4 text-4xl font-bold text-primary">
        Thank You for Participating in the November Session of Activity Zone!
      </h1>
      <p className="mb-8 text-lg text-primary">
        We hope you had an enriching and exciting time. Stay tuned, and we'll see you in the next session soon! Keep an eye out for updates.
      </p>
      <button
        onClick={handleClick}
        className={`px-6 py-3 font-medium text-white transition rounded-lg shadow bg-primary hover:bg-primary-dark ${
          isClicked ? "scale-95" : "scale-100"
        }`}
      >
        Visit Socials
      </button>
    </div>
  );
};

export default Over;
