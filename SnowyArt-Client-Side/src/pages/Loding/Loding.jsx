import { Link } from 'react-router-dom';

const Loding = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center z-[60]">
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Link to={'/'} className="">
        <button className="py-2 px-5 bg-firstColor text-white rounded-md font-semibold absolute bottom-6 left-1/2 -translate-x-1/2 hover:bg-secondColor">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default Loding;
