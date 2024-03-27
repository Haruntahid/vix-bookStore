import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <div className="px-5 lg:px-28 py-8 lg:py-20 bg-[#1313130D] flex flex-col-reverse lg:flex-row gap-10 justify-between items-center rounded-3xl">
        <div>
          <p className="text-3xl lg:text-6xl font-bold">
            Books to freshen up <br /> <span>your bookshelf</span>
          </p>
          <div className="text-center lg:text-left mt-5 lg:mt-12">
            <Link
              to={"/listedbooks"}
              className="px-4 lg:px-7 py-3 lg:py-5 bg-[#23BE0A] text-white lg:text-xl  lg:font-bold rounded-lg"
            >
              View The List
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="w-[60%] lg:w-full"
            src="https://i.ibb.co/6HbSpX1/pngwing-1.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
