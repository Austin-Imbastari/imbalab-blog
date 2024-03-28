import React from 'react';
import star from '/images/star.svg';
import line from '/images/num.svg';
import one from '/images/one.svg';
import two from '/images/two.svg';

const NewProjects = () => {
  return (
    <>
      <div className="container h-screen mt-[60px]">
        <div className="flex">
          <h1 className="text-white text-6xl font-poppins">New Projects</h1>
          <img className="ml-10" src={star} alt="star svg" />
        </div>

        <div
          style={{ border: '1px solid red' }}
          className="flex justify-center"
        >
          <div
            style={{ border: '1px solid black' }}
            className=" relative  w-1/2"
          >
            <div className="">
              <img src={line} alt="" />
            </div>
            <div>
              <img src={two} alt="" />
            </div>
            <div>
              <img src={one} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProjects;
