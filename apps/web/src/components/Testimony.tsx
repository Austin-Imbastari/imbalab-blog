import React from 'react';

const Testimony = () => {
  return (
    <>
      <div className="container mt-[150px]">
        <div>
          <h1 className="text-8xl text-center text-white font-bold font-pachang ">
            Here's what you can expect from me...
          </h1>
        </div>

        <div className="mt-[150px] flex flex-wrap flex-col md:flex-row gap-5 mt-gr lg:mt-lg mb-md lg:mb-xl">
          <h2
            style={{
              background: 'rgb(138, 216, 192)',
            }}
            className="min-h-[350px] lg:min-h-[500px] rounded-3xl	 md:rounded-3xl p-[30px] lg:p-[50px] w-full md:w-[calc(33.33%-10px)] text-black text-6xl font-semibold"
          >
            I’ll bring years of experience, big energy and fresh thinking.
          </h2>
          <h2
            style={{
              background: 'rgb(198, 244, 89)',
            }}
            className="min-h-[350px] lg:min-h-[500px] rounded-lg md:rounded-3xl p-[30px] lg:p-[50px] w-full md:w-[calc(66.66%-10px)] text-black text-6xl font-semibold"
          >
            Listen, challenge and reconnect the dots — joining your team with
            conviction and openness.
          </h2>
          <h2
            style={{
              background: 'rgb(243, 154, 142)',
            }}
            className="min-h-[350px] lg:min-h-[500px] rounded-lg md:rounded-3xl p-[30px] lg:p-[50px] w-full md:w-[calc(50%-10px)] text-black text-6xl font-semibold"
          >
            Bridge the gap between creative and commercial objectives — speaking
            both languages.
          </h2>
          <h2
            style={{
              background: 'rgb(133, 203, 218)',
            }}
            className="min-h-[350px] lg:min-h-[500px] rounded-lg md:rounded-3xl p-[30px] lg:p-[50px] w-full md:w-[calc(50%-10px)] text-black text-6xl font-semibold"
          >
            : Recognise potential — pushing brands to become better than you
            ever thought possible.
          </h2>
          <h2
            style={{
              background: 'rgb(156, 183, 235)',
            }}
            className="min-h-[350px] lg:min-h-[500px]rounded-lg md:rounded-3xl p-[30px] lg:p-[50px] w-full md:w-[calc(58.333%-10px)] text-black text-6xl font-semibold"
          >
            Giving you the foundations to scale —&nbsp;from world-class design
            and advisory to building your future team.
          </h2>
          <h2
            style={{
              background: 'rgb(178, 149, 206)',
            }}
            className="min-h-[350px] lg:min-h-[500px] rounded-lg md:rounded-3xl p-[30px] lg:p-[50px] w-full md:w-[calc(41.667%-10px)] text-black text-6xl font-semibold"
          >
            Teach teams to move at velocity and have a hell of a lot of fun
            doing it.
          </h2>
        </div>
      </div>
    </>
  );
};

export default Testimony;
