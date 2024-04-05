import footerStar from '/images/footerStar.png';
import Star from '/images/star.svg';
const Contact = ({ mobile }: { mobile: boolean }) => {
  return (
    <div className="container mt-[60px] p-10">
      <div className="flex flex-col">
        <div className="flex items-center justify-between ">
          <div>
            <div className="flex">
              <h1 className="text-5xl text-white">Have any questions?</h1>
              <img
                className="ml-6 invisible lg:visible"
                src={Star}
                alt="star png"
              />
            </div>
            <div className="mt-9 w-3/5">
              <p className="text-white text-xl">
                Feel free to send me a message about anything related to my
                blog!
              </p>
            </div>
            <div>
              <button className="mt-9 border-gradient p-3 mr-4 bg-[#363636] rounded-full">
                <a href="mailto: austinimbastari@gmail.com" target="_blank">
                  Send a message
                </a>
              </button>
            </div>
          </div>
          {mobile ? null : (
            <img
              className="min-[320px]:mt-10"
              src={footerStar}
              alt="footstar"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
