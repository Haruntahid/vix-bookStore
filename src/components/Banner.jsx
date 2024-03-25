function Banner() {
  return (
    <>
      <div className="px-28 py-20 bg-[#1313130D] flex justify-between items-center rounded-3xl">
        <div>
          <p className="text-6xl font-bold">
            Books to freshen up <br /> <span>your bookshelf</span>
          </p>
          <button className="px-7 py-5 bg-[#23BE0A] text-white text-xl mt-12 font-bold rounded-lg">
            View The List
          </button>
        </div>
        <div>
          <img src="https://i.ibb.co/6HbSpX1/pngwing-1.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
