import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { BiHeart } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { AiOutlineFullscreen } from 'react-icons/ai';

const ItemSingleCard = ({ data, imageFullScreen }) => {
  // console.log(data);
  const {
    _id,
    photo,
    price,
    category,
    itemName,
    description,
    rating,
    stockStatus,
  } = data;

  return (
    <div className="rounded-lg border-2 border-firstColor w-full min-h-72 p-2 hover:shadow-lg duration-300 hover:scale-[1.03]">
      <div className="rounded-md h-56 w-full overflow-hidden relative">
        <div
          className="h-full bg-cover bg-no-repeat p-12 text-center rounded-md relative hover:scale-110 hover:rotate-3 duration-[2s]"
          style={{
            backgroundImage: `url(${photo})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed rounded-md"
            style={{ backgroundColor: ' rgba(0, 0, 0, 0.4)' }}
          ></div>
        </div>

        <div className="absolute top-2 left-2 z-20 py-1 w-20 text-sm rounded text-white bg-secondColor font-semibold text-center">
          {stockStatus}
        </div>
        <button
          onClick={() => imageFullScreen(photo)}
          className="absolute bottom-2 z-20 left-2 text-white bg-slate-500 p-1 text-2xl rounded-md hover:text-firstColor"
        >
          <AiOutlineFullscreen />
        </button>
        <button className="absolute bottom-2 z-20 right-2 text-white bg-slate-500 p-1 text-2xl rounded-md hover:text-firstColor">
          <BiHeart />
        </button>
      </div>
      <div className="">
        <h3 className="text-left font-bold text-secondColor pt-3">
          {category}
        </h3>
        <h1 className="text-2xl font-bold  pb-3">{itemName}</h1>
        <p className="pb-3 sm:min-h-20">
          {description.slice(0, 80)}
          {description.length > 80 && (
            <Link
              to={`/item-details/${_id}`}
              className="text-secondColor hover:text-firstColor"
            >
              ... See more
            </Link>
          )}
        </p>
        <div className="flex gap-4 items-center pb-4 justify-between">
          <div className="text-xl flex gap-2 items-center">
            <div className="flex gap-1 text-firstColor">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStarHalfStroke />
            </div>
            <p>({rating})</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold pr-3">
              <span className="text-firstColor">$</span>
              {price}
            </h1>
          </div>
        </div>
        <Link to={`/item-details/${_id}`}>
          <button className="w-full px-2 py-2 border-2 border-firstColor hover:bg-transparent bg-firstColor hover:text-firstColor text-white font-bold rounded-md duration-150 active:scale-95">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ItemSingleCard;
ItemSingleCard.propTypes = {
  data: PropTypes.object,
  imageFullScreen: PropTypes.func,
};
