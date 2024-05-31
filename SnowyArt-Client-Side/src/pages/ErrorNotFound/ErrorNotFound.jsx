import { Link } from 'react-router-dom';
import err from '../../assets/error/oppppsssssss.jpg';

const ErrorNotFound = () => {
  return (
    <div className="h-screen w-full bg-white flex flex-col items-center justify-center relative">
      <img className="max-h-full mb-28" src={err} alt="" />
      <Link to={'/'} className="">
        <button className="py-2 px-5 bg-firstColor text-white rounded-md font-semibold absolute bottom-28 sm:bottom-6 left-1/2 -translate-x-1/2 hover:bg-secondColor">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorNotFound;
