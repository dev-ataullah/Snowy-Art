import { useState } from 'react';
import { MdArrowRightAlt } from 'react-icons/md';
import ItemSingleCard from './ItemSingleCard';
import { PropTypes } from 'prop-types';
import { CgClose } from 'react-icons/cg';
import { Link } from 'react-router-dom';
const CraftItemsSection = ({ dta }) => {
  // const [showDta, setShowDta] = useState(6);
  // console.log(dta);
  const [imgFullScreen, setImgFullScreen] = useState();
  const imageFullScreen = (img) => {
    // console.log(img);
    setImgFullScreen(img);
    document.getElementById('my_modal_3').showModal();
  };
  return (
    <div className="pb-14">
      {/* Modal open image  */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box h-[500px] w-[500] relative border border-firstColor">
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

      <div>
        <h1 className="text-3xl md:text-5xl text-center pt-2 md:pt-10 font-bold pb-2">
          Art & Craft Items
        </h1>
        <p className="max-w-[700px] mx-auto text-center ">
          {`Discover a trove of artisanal wonders at SnowyArt's Art Craft Items
        Section. From handmade ceramics to intricate textiles, find treasures to
        inspire your creativity.`}
        </p>
      </div>
      <div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {dta.slice(0, 6).map((data) => (
            <ItemSingleCard
              key={data._id}
              data={data}
              imageFullScreen={imageFullScreen}
            />
          ))}
        </div>
        {6 < dta.length && (
          <Link to={'/all-art-craft-items'}>
            <p
              // data-aos="fade-down"
              className="py-2 px-4 text-center cursor-pointer mt-8 underline flex items-center gap-2 justify-center hover:text-redLi text-lg text-secondColor hover:translate-x-2 duration-150"
              // onClick={() => setShowDta(dta.length)}
            >
              View More Items
              <span className="text-2xl">
                <MdArrowRightAlt />
              </span>
            </p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CraftItemsSection;
CraftItemsSection.propTypes = {
  dta: PropTypes.array,
};
