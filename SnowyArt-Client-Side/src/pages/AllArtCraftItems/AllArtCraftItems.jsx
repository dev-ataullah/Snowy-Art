import { Link } from 'react-router-dom';
import img1 from '../../assets/banner/img2.jpg';
// import ItemSingleCard from '../../components/CraftItemsSection/ItemSingleCard';
import { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import Loding from '../Loding/Loding';
const AllArtCraftItems = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['all-art-craft-items'],
    queryFn: async () => {
      const res = await fetch(
        'https://snowy-art-server-side.vercel.app/all-art-craft-items'
      );
      return res.json();
    },
  });
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
      <Helmet>
        <title>All Art&Craft | SnowyArt</title>
      </Helmet>
      {/* Modal open image  */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box h-[500px] w-full sm:w-[500] relative border border-firstColor">
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
          <h1 className="absolute z-30 left-1/2 -translate-x-1/2 text-2xl sm:text-3xl text-white md:text-5xl font-bold border-b-4 border-secondColor text-center top-32 md:top-44 w-72 sm:w-[350px] md:w-[550px]">
            All Art And Craft Items
          </h1>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        {/* <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {data.map((dta) => (
            <ItemSingleCard
              key={dta._id}
              data={dta}
              imageFullScreen={imageFullScreen}
            />
          ))}
        </div> */}
        <div className="mt-10 overflow-x-auto">
          <table className="min-w-[930px] w-full border">
            <thead>
              <tr className="border text-xl">
                <th className="border-r px-2 py-5 bg-secondColor text-white">
                  No
                </th>
                <th className="border-r px-2 py-5 bg-secondColor text-white w-40 min-w-40">
                  Photo
                </th>
                <th className="border-r px-2 py-5 bg-secondColor text-white min-w-52">
                  Art & Craft Item Name
                </th>
                <th className="border-r px-2 py-5 bg-secondColor text-white min-w-44">
                  Categories Name
                </th>
                <th className="border-r px-2 py-5 bg-secondColor text-white">
                  Price
                </th>
                <th className="border-r px-2 py-5 bg-secondColor text-white">
                  Ratings
                </th>
                <th className="border-r px-2 py-5 bg-secondColor text-white">
                  Stock Status
                </th>
                <th className="bg-secondColor text-white w-24">Details</th>
              </tr>
            </thead>
            <tbody>
              {data.map((dta, i) => (
                <tr key={dta._id} className="text-xl border-b">
                  <td
                    className="border-r text-center font-bold bannerFont"
                    id="noTable"
                  >
                    {i + 1}
                  </td>
                  <td className="border-r h-36 flex flex-col items-center justify-center">
                    <div
                      className="h-32 w-full cursor-pointer"
                      onClick={() => imageFullScreen(dta.photo)}
                      style={{
                        backgroundImage: `url(${dta.photo})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></div>
                  </td>
                  <td className="border-r px-2">{dta.itemName}</td>
                  <td className="border-r px-2">{dta.category}</td>
                  <td className="border-r px-2 text-center heightFont">
                    ${dta.price}
                  </td>
                  <td className="border-r px-2 text-center">{dta.rating}</td>
                  <td className="border-r px-2 text-center">
                    {dta.stockStatus}
                  </td>
                  <td className="text-center cursor-pointer font-bold hover:text-firstColor duration-100">
                    <Link
                      className=" py-14 px-3 duration-100 hover:bg-[#6e686847]"
                      to={`/item-details/${dta._id}`}
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllArtCraftItems;
