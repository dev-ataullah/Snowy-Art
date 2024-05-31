import img1 from '../../assets/icon/painting.png';
import img2 from '../../assets/icon/scach.png';
import img3 from '../../assets/icon/drowing.png';
import img4 from '../../assets/icon/sculpture.png';
import img5 from '../../assets/icon/digital-drawing.png';
import Marquee from 'react-fast-marquee';
const BannerUnder = () => {
  return (
    <Marquee className="w-full">
      <div className="w-full grid grid-cols-5 gap-10 mt-5">
        <div className="border-2 border-secondColor rounded-md px-16 py-3 hover:-skew-x-12 duration-500 ml-10">
          <span>
            <img className="h-20 w-20 mx-auto" src={img1} alt="" />
          </span>
          <h1 className="text-4xl font-black text-center pt-2">Painting</h1>
        </div>
        <div className="border-2 border-secondColor rounded-md px-16 py-3 hover:-skew-x-12 duration-500 ">
          <span>
            <img className="h-20 w-20 mx-auto" src={img2} alt="" />
          </span>
          <h1 className="text-4xl font-black text-center pt-2">Sketch</h1>
        </div>
        <div className="border-2 border-secondColor rounded-md px-16 py-3 hover:-skew-x-12 duration-500">
          <span>
            <img className="h-20 w-20 mx-auto" src={img3} alt="" />
          </span>
          <h1 className="text-4xl font-black text-center pt-2">Drawing</h1>
        </div>
        <div className="border-2 border-secondColor rounded-md px-16 py-3 hover:-skew-x-12 duration-500">
          <span>
            <img className="h-20 w-20 mx-auto" src={img4} alt="" />
          </span>
          <h1 className="text-4xl font-black text-center pt-2">Sculpture</h1>
        </div>
        <div className="border-2 border-secondColor rounded-md px-16 py-3 hover:-skew-x-12 duration-500">
          <span>
            <img className="h-20 w-20 mx-auto" src={img5} alt="" />
          </span>
          <h1 className="text-4xl font-black text-center pt-2">Digital</h1>
        </div>
        <div className="px-10"></div>
      </div>
    </Marquee>
  );
};

export default BannerUnder;
