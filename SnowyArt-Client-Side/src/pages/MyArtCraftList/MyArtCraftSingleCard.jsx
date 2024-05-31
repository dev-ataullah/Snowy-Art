import { AiOutlineFullscreen } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { BiShareAlt } from 'react-icons/bi';
import { PropTypes, func } from 'prop-types';
import { Link } from 'react-router-dom';

const MyArtCraftSingleCard = ({ dta, handleDeleteCard, imageFullScreen }) => {
  const {
    _id,
    photo,
    price,
    category,
    itemName,
    description,
    rating,
    stockStatus,
    customization,
    processing_time,
  } = dta;

  return (
    <div className="rounded-lg border-2 border-firstColor max-w-[700px] lg:max-w-full w-full mx-auto hover:shadow-md flex flex-col lg:flex-row gap-3 lg:gap-5 items-center">
      {/* Banner Image */}
      <div className="rounded-t-md lg:rounded-t-none lg:rounded-l-md h-[370px] w-full lg:w-2/5 overflow-hidden relative border-r">
        <div
          className="h-full bg-cover bg-no-repeat p-12 text-center rounded-t-md lg:rounded-t-none lg:rounded-l-md relative duration-[2s]"
          style={{
            backgroundImage: `url(${photo})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        <button
          onClick={() => imageFullScreen(photo)}
          className="absolute bottom-2 z-20 right-2 text-white bg-slate-500 p-1 text-2xl rounded-md hover:text-firstColor"
        >
          <AiOutlineFullscreen />
        </button>
      </div>
      {/* Content */}
      <div className="w-full lg:w-3/5 p-4 lg:p-0 flex flex-col flex-grow">
        <h1 className="text-2xl sm:text-3xl font-bold">{itemName}</h1>{' '}
        <div className="flex justify-between">
          <div className="text-xl flex gap-2 items-center">
            <div className="flex gap-1 text-firstColor">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStarHalfStroke />
            </div>
            <p className="text-secondColor cursor-pointer hover:underline">
              ({rating}) Ratings
            </p>
          </div>
          <div className="text-2xl md:text-3xl flex gap-4 pr-5">
            <span className="cursor-pointer hover:text-firstColor hover:scale-125 duration-300">
              <BiShareAlt />
            </span>
          </div>
        </div>
        <hr className="my-2" />
        <h1 className="text-3xl font-semibold text-firstColor heightFont">
          $ {price}
        </h1>
        <p className="pt-2 flex flex-grow text-base max-w-[600px]">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row sm:gap-4 lg:gap-2 xl:gap-5">
          <div className="sm:border-r sm:pr-4">
            <h3 className="lg:text-lg xl:text-xl text-left font-bold text-secondColor pt-2">
              <span>Categories: </span>
              <span className="px-2 border rounded text-firstColor">
                {' '}
                {category}
              </span>
            </h3>
            <h3 className="lg:text-lg xl:text-xl text-left font-bold text-secondColor pt-2">
              <span>Stock Status: </span>
              <span className="px-2 border rounded text-firstColor">
                {' '}
                {stockStatus}
              </span>
            </h3>
          </div>

          <div>
            <h3 className="lg:text-lg xl:text-xl text-left font-bold text-secondColor pt-2">
              <span>Processing Time: </span>
              <span className="px-2 border rounded text-firstColor">
                {' '}
                {processing_time.length === 1
                  ? '0' + processing_time
                  : processing_time}{' '}
                Hours
              </span>
            </h3>
            <h3 className="lg:text-lg xl:text-xl text-left font-bold text-secondColor pt-2">
              <span>Customization: </span>
              <span className="px-2 border rounded text-firstColor">
                {' '}
                {customization}
              </span>
            </h3>
          </div>
        </div>
        <h3 className="text-lg text-left font-semibold pt-1">
          <span>Published by: </span>
          <span className="px-2">You</span>
        </h3>
        <div className="flex gap-5 items-center pt-3 pb-2">
          <Link to={`/item-updating/${_id}`}>
            <button className="w-40 py-2 font-semibold text-white hover:-translate-y-1 duration-200 bg-secondColor hover:bg-[#2d8e8b]">
              Update
            </button>
          </Link>
          <button
            className="w-40 py-2 font-semibold text-white hover:-translate-y-1 duration-200 bg-red-500 hover:bg-[#bf2f2f]"
            onClick={() => handleDeleteCard(_id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyArtCraftSingleCard;
MyArtCraftSingleCard.propTypes = {
  dta: PropTypes.object,
  handleDeleteCard: func,
  imageFullScreen: func,
};
