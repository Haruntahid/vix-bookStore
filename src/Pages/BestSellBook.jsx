function BestSellBook() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const month = months[date.getMonth()];
  return (
    <div>
      <div className="py-12 bg-[#1313130D] rounded-3xl">
        <h2 className="text-4xl font-bold text-center">
          Best Selling Book in{" "}
          <span className="bg-300% font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
            {month}
          </span>
        </h2>
      </div>
      <div className="flex mt-10 gap-10 border border-[#13131380] p-5 rounded-2xl">
        <div className="w-1/5 flex ">
          <img
            className="w-full rounded-2xl"
            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1537651172i/41555951.jpg"
            alt=""
          />
        </div>
        <div className="w-3/5">
          <p className="font-bold text-4xl">Spine of the Dragon</p>
          <p className="font-medium text-xl">By : Kevin J. Andersons</p>
          <div className="divider"></div>
          <p className="text-xl">
            Bestselling author Kevin J. Andersons triumphant return to epic
            fantasy, Spine of the Dragon, is a politically charged adventure of
            swords, sorcery, venegeance, and the rise of sleeping giants. Two
            continents at war, the Three Kingdoms and Ishara, are divided by
            past bloodshed. When an outside threat arises—the reawakening of a
            powerful ancient race that wants to remake the world—the two warring
            nations must somehow set aside generational hatreds and form an
            alliance to fight their true enemy.
          </p>
          <div className="flex gap-4 my-6 items-center">
            <p className="text-xl font-bold">Tags</p>
            <p className="px-3 py-1 rounded-full text-[#23BE0A] bg-[#23BE0A33]">
              #Fantasy
            </p>
            <p className="px-3 py-1 rounded-full text-[#23BE0A] bg-[#23BE0A33]">
              #Dragons
            </p>
            <p className="px-3 py-1 rounded-full text-[#23BE0A] bg-[#23BE0A33]">
              #Epic Fantasy
            </p>
          </div>
          <div className="divider"></div>
          <div className="mt-8 flex gap-5">
            <button className="px-5 font-bold text-white py-1 bg-[#23BE0A] rounded-full border border-gray-200">
              $9.00
            </button>
            <button className="btn px-7 py-1 bg-[#50B1C9] text-white border border-gray-200">
              Get the Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSellBook;
