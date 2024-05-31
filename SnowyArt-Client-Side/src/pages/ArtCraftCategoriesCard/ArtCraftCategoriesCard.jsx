import { useParams } from 'react-router-dom';
import img1 from '../../assets/banner/img2.jpg';
import ItemSingleCard from '../../components/CraftItemsSection/ItemSingleCard';
import { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import Loding from '../Loding/Loding';
import Swal from 'sweetalert2';
import { useQuery } from 'react-query';
const ArtCraftCategoriesCard = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['all-art-craft-items'],
    queryFn: async () => {
      const res = await fetch(
        'https://snowy-art-server-side.vercel.app/all-art-craft-items'
      );
      return res.json();
    },
  });
  const { id } = useParams();
  const filterCategories = data.filter((dta) => dta.category === id);
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
    <div className="pb-20">
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

      <div className="h-52 md:h-72 bg-fuchsia-100">
        <div className=" h-full w-full overflow-hidden">
          <div
            className="h-full bg-cover bg-no-repeat p-12 text-center  relative hover:scale-110 hover:-rotate-1 duration-[2s] "
            style={{
              backgroundImage: `url(${img1})`,
              backgroundPosition: 'top  ',
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
              {id}
            </h1>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filterCategories.map((dta) => (
            <ItemSingleCard
              key={dta._id}
              data={dta}
              imageFullScreen={imageFullScreen}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtCraftCategoriesCard;
