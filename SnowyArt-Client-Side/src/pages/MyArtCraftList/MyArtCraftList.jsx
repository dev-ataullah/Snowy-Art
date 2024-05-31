import { Link } from 'react-router-dom';
import img1 from '../../assets/banner/img10.jpg';
import noFile from '../../assets/error/noDta.jpg';
import { useContext, useEffect, useState } from 'react';
import { ContextAuth } from '../../provider/Provider';
import MyArtCraftSingleCard from './MyArtCraftSingleCard';
import axios from 'axios';
import Swal from 'sweetalert2';
import { BiSearch } from 'react-icons/bi';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import Loding from '../Loding/Loding';
import { CgClose } from 'react-icons/cg';
const MyArtCraftList = () => {
  const { userDta } = useContext(ContextAuth);
  const { data, isLoading, isError } = useQuery({
    queryKey: ['all-art-craft-items'],
    initialData: [],
    queryFn: async () => {
      const res = await fetch(
        'https://snowy-art-server-side.vercel.app/all-art-craft-items'
      );
      return res.json();
    },
  });

  // All my data Filter func
  const [filterDta, setFilterDta] = useState();
  useEffect(() => {
    const filterData = data.filter(
      (dta) => dta.email === userDta.email || dta.uid === userDta.uid
    );
    setFilterDta(filterData);
  }, [data, userDta.email, userDta.uid]);

  // UI Showing State
  const [filterMyDta, setFilterMyDta] = useState(filterDta); //filterDta

  // Sorting State
  const [sorting, setSorting] = useState();
  const handleSorting = (e) => {
    const sort = e.target.value;
    // console.log(sort);
    if (sort === 'Default') {
      setFilterMyDta(filterDta);
      return;
    }
    useEffect(() => {
      const sortCustomizable = filterDta?.filter(
        (dta) => dta.customization === sort
      );
      setSorting(sortCustomizable);
    }, [sort]);
    setFilterMyDta(sorting);
  };

  //  Delete Item Function Call
  const handleDeleteCard = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://snowy-art-server-side.vercel.app/item-deletes/${id}`)
          .then((response) => {
            console.log(`Deleted post with ID ${id},,,,,${response}`);
            Swal.fire({
              title: 'Deleted!',
              text: 'Your item has been successfully deleted.',
              icon: 'success',
            });
            const deletedDtaRemove = filterDta?.filter((dta) => dta._id !== id);
            setFilterMyDta(deletedDtaRemove);
          })
          .catch((error) => {
            console.error(error);
            Swal.fire({
              title: 'Oppps!',
              text: 'Your item cannot be deleted !',
              icon: 'error',
            });
          });
      }
    });
  };
  // Image Full screen
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
        <title>My Art List | SnowyArt</title>
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
      <div className="h-48 md:h-64 bg-fuchsia-100">
        <div className="h-full w-full overflow-hidden">
          <div
            className="h-full bg-cover bg-no-repeat p-12 text-center relative hover:scale-110 hover:-rotate-1 duration-[2s] "
            style={{
              backgroundImage: `url(${img1})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed flex items-center justify-center"
              style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
            ></div>
          </div>
          <div className="absolute z-30 left-1/2 -translate-x-1/2 text-2xl sm:text-3xl text-white font-bold text-center top-28 md:top-36 w-full italic">
            <Link to={'/'}>
              <button className="italic">Home /</button>
            </Link>{' '}
            <Link to={'/my-art-craft-list'}>
              <button className="italic">My Art & Craft</button>
            </Link>
          </div>
        </div>
      </div>
      {/* End Banner top */}
      <div className="w-11/12 mx-auto mb-8">
        <div className="my-4 flex justify-between items-center">
          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:gap-2">
            <label>Sort by: </label>
            <select
              name="sortBy"
              id=""
              className="py-1 border border-firstColor px-3 outline-none w-36 sm:w-48 rounded"
              onChange={handleSorting}
            >
              <option selected value="Default">
                Default
              </option>
              <option value="Yes">Customizable</option>
              <option value="No">Non Customizable</option>
            </select>
          </div>
          <div className=" flex items-start flex-col">
            <label htmlFor="" className="sm:hidden">
              Search
            </label>
            <div className="relative">
              <input
                type="text"
                name="search"
                placeholder="Search Item"
                id=""
                className="py-1 border border-firstColor px-3 outline-none w-44 sm:w-72 rounded"
              />
              <span className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-3 text-xl">
                <BiSearch />
              </span>
            </div>
          </div>
        </div>
        {filterMyDta?.length >= 1 ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5">
              {filterMyDta.map((dta) => (
                <MyArtCraftSingleCard
                  key={dta._id}
                  dta={dta}
                  handleDeleteCard={handleDeleteCard}
                  imageFullScreen={imageFullScreen}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-8">
            <img className="max-h-[450px] mx-auto" src={noFile} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyArtCraftList;
