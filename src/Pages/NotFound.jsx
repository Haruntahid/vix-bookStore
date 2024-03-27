import { useRouteError } from "react-router-dom";

function NotFound() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col">
        <p className="text-xl text-center mb-2">404 Not Found!</p>
        <h1 className="text-6xl font-bold text-purple-400 text-center">
          Ha Ha are you a Hacker?
        </h1>
        <p className="mt-5">{error.data}</p>
      </div>
    </>
  );
}

export default NotFound;
