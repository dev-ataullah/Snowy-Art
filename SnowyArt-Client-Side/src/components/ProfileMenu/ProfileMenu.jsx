import { Link } from 'react-router-dom';
import { ContextAuth } from '../../provider/Provider';
import { useContext } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { PropTypes } from 'prop-types';
const ProfileMenu = ({ viewProfile, setViewProfile }) => {
  const { userDta, logOut } = useContext(ContextAuth);
  return (
    <div className="h-full">
      <div className="profilemenu border-2 bg-slate-500 text-white border-orange-400 rounded-md w-[300px] p-4 max-h-[400px] overflow-y-scroll">
        <div className="space-y-2">
          <img
            src={userDta.photoURL}
            alt=""
            className="h-16 w-16 border-2 border-orange-400 p-1 rounded-full mx-auto"
          />
          <h2 className="text-2xl font-semibold text-center">
            {userDta ? userDta.displayName : 'user.displayName'}
          </h2>
          <div className="w-full text-center">
            <Link to={'profile'} onClick={() => setViewProfile(!viewProfile)}>
              <button className="border-2 border-orange-400 relative inline-flex items-center justify-start px-6 py-1.5 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-secondColor absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-slate-800 transition-colors duration-300 ease-in-out group-hover:text-white">
                  View Profile
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <ul className="flex flex-col gap-3 my-4">
            <Link
              className="py-1.5 border rounded-md w-full px-3 hover:border-orange-400 duration-150"
              to={'/'}
              onClick={() => setViewProfile(!viewProfile)}
            >
              Home
            </Link>
            <Link
              className="py-1.5 border rounded-md w-full px-3 hover:border-orange-400 duration-150 lg:hidden"
              to={'/my-art-craft-list'}
            >
              My Art&Craft List
            </Link>
            <Link
              className="py-1.5 border rounded-md w-full px-3 hover:border-orange-400 duration-150 lg:hidden"
              to={'/all-art-craft-items'}
            >
              All Art & craft Items
            </Link>
            <Link
              className="py-1.5 border rounded-md w-full px-3 hover:border-orange-400 duration-150 lg:hidden"
              to={'/add-craft-item'}
            >
              Add Craft Items
            </Link>

            <Link className="py-1.5 border rounded-md w-full px-3 hover:border-orange-400 duration-150">
              Privecy policy
            </Link>
          </ul>
          <button
            onClick={logOut}
            className="relative group w-full py-1.5 px-4 border-2 font-bold tracking-widest active:scale-95 duration-1000 hover:border-secondColor hover:text-orange-400 border-orange-400 rounded"
          >
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondColor group-hover:w-full group-hover:transition-all duration-1000 group-hover:duration-1000"></span>
            <span className=" flex flex-row-reverse justify-center">
              <span className="text-xl hover:text-secondColor">
                <BiLogOut />
              </span>
              Log out
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
ProfileMenu.propTypes = {
  viewProfile: PropTypes.boolean,
  setViewProfile: PropTypes.func,
};
