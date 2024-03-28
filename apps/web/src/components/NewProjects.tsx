import React from 'react';
import star from '/images/star.svg';

const NewProjects = () => {
  return (
    <>
      <div className="container h-screen mt-[60px]">
        <div className="flex">
          <h1 className="text-white text-6xl">New Projects</h1>
          <img className="ml-10" src={star} alt="star svg" />
        </div>
      </div>
    </>
  );
};

export default NewProjects;
