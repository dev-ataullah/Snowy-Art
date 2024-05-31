import { useParams } from 'react-router-dom';
import img1 from '../../assets/banner/img4.png';
import { FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { AiOutlineFullscreen } from 'react-icons/ai';
import { BiShareAlt } from 'react-icons/bi';
import { HiOutlineHeart } from 'react-icons/hi';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import Loding from '../Loding/Loding';
import { CgClose } from 'react-icons/cg';
import { useState } from 'react';

const ArtAndCraftDetails = () => {
  const { id } = useParams();
  const {
    data: allDta,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['all-art-craft-items'],
    queryFn: async () => {
      const res = await fetch(
        'https://snowy-art-server-side.vercel.app/all-art-craft-items'
      );
      return res.json();
    },
  });
  const filterDta = allDta.find((dta) => dta._id === id);
  //   console.log(filterDta);
  const {
    photo,
    price,
    category,
    itemName,
    description,
    rating,
    stockStatus,
    customization,
    processing_time,
  } = filterDta;

  // buy add card alart
  const handleBuy = () => {
    Swal.fire({
      // position: 'top-end',
      icon: 'success',
      title: 'You have successfully purchased this item.',
      showConfirmButton: true,
      timer: 2500,
    });
  };
  const handleAddToCard = () => {
    Swal.fire({
      // position: 'top-end',
      icon: 'success',
      title: 'You have successfully added this item to the card.',
      showConfirmButton: true,
      timer: 2500,
    });
  };
  const [imgFullScreen, setImgFullScreen] = useState();
  const imageFullScreen = (img) => {
    // console.log(img);
    setImgFullScreen(img);
    document.getElementById('my_modal_3').showModal();
  };

  if (isError) {
    Swal.fire({
      title: 'Ooppsss...!',
      text: 'Sorry, All Art And Craft data could not be loaded.',
      icon: 'error',
      timer: 2500,
    });
  }
  if (isLoading) {
    return <Loding />;
  }
  return (
    <div>
      <Helmet>
        <title>Item Details | SnowyArt</title>
      </Helmet>
      {/* Modal open image  */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box h-[600px] sm:w-[800px] relative border border-firstColor">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-2xl bg-slate-700 text-white hover:text-firstColor hover:bg-white border-2 border-slate-700 hover:border-firstColor">
              <CgClose />
            </button>
          </form>
          <div
            className="h-full w-full bg-cover bg-no-repeat rounded-md"
            style={{
              backgroundImage: `url(${imgFullScreen})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
        </div>
      </dialog>
      {/* // Modal End */}
      {/* Top Banner Img */}
      <div className="h-52 md:h-72 bg-fuchsia-100">
        <div className=" h-full w-full overflow-hidden">
          <div
            className="h-full bg-cover bg-no-repeat p-12 text-center  relative hover:scale-110 hover:-rotate-1 duration-[2s] "
            style={{
              backgroundImage: `url(${img1})`,
              backgroundPosition: 'top',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed  flex items-center justify-center"
              style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
            ></div>
          </div>
          <div className="w-72 sm:w-[350px] md:w-[550px] absolute z-30 left-1/2 -translate-x-1/2 text-2xl sm:text-3xl text-white md:text-5xl font-bold top-32 md:top-44">
            <h1 className="border-b-4 border-secondColor text-center  px-2">
              {itemName}
            </h1>
          </div>
        </div>
      </div>
      {/* End Banner top */}
      <div className="w-11/12 mx-auto my-14">
        <div className="rounded-lg border-2 border-firstColor max-w-[700px] lg:max-w-full mx-auto hover:shadow-lg flex flex-col lg:flex-row gap-3 lg:gap-5 items-center">
          {/* Banner Image */}
          <div className="rounded-t-md lg:rounded-t-none lg:rounded-l-md h-80 sm:h-96 md:min-h-[520px] w-full lg:w-2/5 overflow-hidden relative border-r">
            <div
              className="h-full bg-cover bg-no-repeat p-12 text-center rounded-t-md lg:rounded-t-none lg:rounded-l-md relative duration-[2s]"
              style={{
                backgroundImage: `url(${photo})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed rounded-t-md lg:rounded-t-none lg:rounded-l-md"
                style={{ backgroundColor: ' rgba(0, 0, 0, 0.4)' }}
              ></div> */}
            </div>

            <button
              onClick={() => imageFullScreen(photo)}
              className="absolute bottom-2 z-20 right-2 text-white bg-slate-500 p-1 text-2xl rounded-md hover:text-firstColor"
            >
              <AiOutlineFullscreen />
            </button>
          </div>
          {/* Content */}
          <div className="w-full lg:w-3/5 p-4 lg:p-0">
            <h1 className="text-3xl sm:text-4xl font-bold pb-4 pt-5">
              {itemName}
            </h1>{' '}
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
                <span className="cursor-pointer hover:text-firstColor hover:scale-125 duration-300">
                  <HiOutlineHeart />
                </span>
              </div>
            </div>
            <hr className="my-4" />
            <h1 className="text-4xl font-semibold text-firstColor heightFont">
              $ {price}
            </h1>
            <p className="pt-5 flex flex-grow text-base max-w-[600px]">
              {description}
            </p>
            <h3 className="text-xl text-left font-bold text-secondColor pt-2">
              <span>Categories: </span>
              <span className="px-2 border rounded text-firstColor">
                {' '}
                {category}
              </span>
            </h3>
            <h3 className="text-xl text-left font-bold text-secondColor pt-2">
              <span>Stock Status: </span>
              <span className="px-2 border rounded text-firstColor">
                {' '}
                {stockStatus}
              </span>
            </h3>
            <h3 className="text-xl text-left font-bold text-secondColor pt-2">
              <span>Processing Time: </span>
              <span className="px-2 border rounded text-firstColor">
                {' '}
                {processing_time.length === 1
                  ? '0' + processing_time
                  : processing_time}{' '}
                Hours
              </span>
            </h3>
            <h3 className="text-xl text-left font-bold text-secondColor pt-2">
              <span>Customization: </span>
              <span className="px-2 border rounded text-firstColor">
                {' '}
                {customization}
              </span>
            </h3>
            <h3 className="text-lg text-left font-semibold pt-1">
              <span>Published by: </span>
              <span className="px-2">
                {' '}
                {filterDta?.userName || 'Username not added'}
              </span>
            </h3>
            <div className="flex gap-5 items-center pt-5 pb-3">
              <button
                className="w-40 py-2 font-semibold text-white hover:-translate-y-1 duration-200 bg-firstColor hover:bg-[#d78130]"
                onClick={handleBuy}
              >
                Buy Now
              </button>
              <button
                className="w-40 py-2 font-semibold text-white hover:-translate-y-1 duration-200 bg-secondColor hover:bg-[#2d8e8b]"
                onClick={handleAddToCard}
              >
                Add to Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtAndCraftDetails;
