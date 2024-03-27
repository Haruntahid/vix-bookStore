import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const error = useRouteError();
  const navigate = useNavigate();
  const handelNavigate = () => {
    navigate("/");
  };
  console.log(error);
  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col px-4">
        <p className="text-xl text-center mb-2">404 Not Found!</p>
        <h1 className="text-4xl lg:text-6xl font-bold text-purple-400 text-center">
          Ha Ha are you a Hacker?
        </h1>
        <p className="mt-5">{error.data}</p>
        <button
          onClick={handelNavigate}
          className="btn px-7 py-1 bg-[#50B1C9] text-white border border-gray-200 mt-10"
        >
          Go To Homepage
        </button>
      </div>
    </>
  );
}

export default NotFound;
