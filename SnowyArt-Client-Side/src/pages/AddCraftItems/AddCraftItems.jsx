import Swal from 'sweetalert2';
import banner from '../../assets/banner/img9.jpg';
import { useContext } from 'react';
import { ContextAuth } from '../../provider/Provider';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AddCraftItems = () => {
  const { userDta } = useContext(ContextAuth);
  // console.log(userDta);
  const handleArtCraftItem = (e) => {
    e.preventDefault();
    const dta = e.target;
    const itemName = dta.itemName.value;
    const category = dta.category.value;
    const processing_time = dta.processing_time.value;
    const customization = dta.customization.value;
    const stockStatus = dta.stockStatus.value;
    const rating = dta.rating.value;
    const price = dta.price.value;
    const photo = dta.photo.value;
    const description = dta.description.value;
    const userName = userDta?.displayName || 'Username not added';
    const email = userDta.email;
    const uid = userDta.uid;
    const formData = {
      itemName,
      category,
      processing_time,
      customization,
      stockStatus,
      rating,
      price,
      photo,
      description,
      userName,
      email,
      uid,
    };
    // console.log(formData);
    fetch('https://snowy-art-server-side.vercel.app/add-art-craft-items', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((dta) => {
        // console.log(dta);
        if (dta.acknowledged) {
          Swal.fire({
            // position: 'top-end',
            icon: 'success',
            title: 'Your item has been successfully Added',
            showConfirmButton: true,
            timer: 1500,
          });
        }
      });
    dta.reset();
  };
  return (
    <div>
      <Helmet>
        <title>Add Item | SnowyArt</title>
      </Helmet>
      {/* Top Banner Img */}
      <div className="h-48 md:h-64 bg-fuchsia-100">
        <div className="h-full w-full overflow-hidden">
          <div
            className="h-full bg-cover bg-no-repeat p-12 text-center relative hover:scale-110 hover:-rotate-1 duration-[2s] "
            style={{
              backgroundImage: `url(${banner})`,
              backgroundPosition: 'top',
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
            <Link to={'/add-craft-item'}>
              <button className="italic">Add Item</button>
            </Link>
          </div>
        </div>
      </div>
      {/* End Banner top */}
      {/* Main From */}
      <div className="rounded-lg py-5 px-6 md:px-8 lg:px-16 my-8 border-2 border-firstColor w-11/12 mx-auto shadow-xl">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          Add Art & Craft Items
        </h1>
        <p className="max-w-[932px] text-center text-opacity-70 sm:text-lg mx-auto pt-2 font-light">
          {`Welcome to SnowyArt's Add Art & Craft Items page! Share your creative
          treasures with the world. Upload, describe, and showcase your
          masterpieces here`}
        </p>
        <hr className=" mt-3 mb-6" />
        <div>
          <form className="flex flex-col gap-5" onSubmit={handleArtCraftItem}>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label className=" text-opacity-80 text-lg font-semibold">
                  Name Of Item
                </label>
                <input
                  required
                  className=" placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none border"
                  type="text"
                  name="itemName"
                  placeholder="Enter item name"
                />
              </div>
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label className=" text-opacity-80 text-lg font-semibold">
                  Select Category
                </label>
                <select
                  className=" placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none border"
                  name="category"
                >
                  <option value="" defaultChecked>
                    Select a category
                  </option>
                  <option value="Landscape Painting">
                    Landscape Paintings
                  </option>
                  <option value="Portrait Drawing">Portrait Drawing</option>
                  <option value="Watercolour Painting">
                    Watercolour Painting
                  </option>
                  <option value="Oil Painting">Oil Painting</option>
                  <option value="Charcoal Sketching">Charcoal Sketching</option>
                  <option value="Cartoon Drawing">Cartoon Drawing</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label className=" text-opacity-80 text-lg font-semibold">
                  Processing Time (hours)
                </label>
                <input
                  required
                  className=" placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none border"
                  type="number"
                  name="processing_time"
                  placeholder="Enter processing time"
                />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center gap-5 w-full md:w-1/2">
                <div className="flex flex-col w-full gap-2">
                  <label className=" text-opacity-80 text-lg font-semibold">
                    Customization
                  </label>
                  <select
                    required
                    className=" placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none border"
                    name="customization"
                  >
                    <option defaultChecked>Select a option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="flex flex-col w-full gap-2">
                  <label className=" text-opacity-80 text-lg font-semibold">
                    Stock Status
                  </label>
                  <select
                    required
                    className=" placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none border"
                    name="stockStatus"
                  >
                    <option defaultChecked>Select a option</option>
                    <option value="In stock">In stock</option>
                    <option value="Out Stock">Out Stock</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label className=" text-opacity-80 text-lg font-semibold">
                  Rating Of Item
                </label>
                <input
                  required
                  className=" placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none border"
                  type="number"
                  name="rating"
                  placeholder="Enter item rating"
                />
              </div>
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label className=" text-opacity-80 text-lg font-semibold">
                  Price
                </label>
                <input
                  required
                  className=" placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none border"
                  type="text"
                  name="price"
                  placeholder="Enter price of item"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label className=" text-opacity-80 text-lg font-semibold">
                  Photo
                </label>
                <input
                  required
                  className=" placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none border"
                  type="url"
                  name="photo"
                  placeholder="Enter item photo URL"
                />
              </div>
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label className=" text-opacity-80 text-lg font-semibold">
                  Short Description
                </label>
                <textarea
                  className=" placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none border h-20"
                  name="description"
                  placeholder="Enter item short description
                  "
                ></textarea>
              </div>
            </div>
            <button className="w-full py-1 bg-firstColor rounded-md border-2 border-firstColor text-white font-bold sm:text-lg mb-5 md:mb-0 active:-skew-x-[30deg] hover:bg-transparent hover:text-firstColor duration-200">
              Add Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCraftItems;
<h1 className="text-6xl">AddCraftItems</h1>;
