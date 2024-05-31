import { MdCall, MdLocationCity, MdWhatsapp } from 'react-icons/md';
import images from '../../assets/banner/img10.jpg';
import img1 from '../../assets/gelary/img6.png';
import img2 from '../../assets/gelary/img7.jpg';
import img3 from '../../assets/gelary/img10.jpg';
import img4 from '../../assets/gelary/img9.png';
import { SiGmail } from 'react-icons/si';
import ContactForm from '../../components/ContactFrom/ContactFrom';
const Contact = () => {
  return (
    <div className="mb-10">
      <div className="mt-10 flex flex-col-reverse md:flex-row-reverse gap-4 md:gap-8 lg:gap-28 justify-between">
        <div className="w-full md:w-3/5">
          <h1
            data-aos="fade-right"
            className="text-4xl md:text-5xl font-bold text-redLi border-b-4 border-secondColor inline-block"
          >
            Contact Us
          </h1>

          <p data-aos="fade-down" className="max-w-[600px] text-slate-400 my-6">
            {`Connect with SnowyArt easily through our Contact Us section. Reach out for inquiries, collaborations, or assistance, and let's create together!`}
          </p>
          <div className="shadow-lg h-80 mt-10 rounded-lg  grid grid-cols-2 gap-2">
            <div
              data-aos="fade-down"
              className="w-full flex items-center justify-center bg-red-300 rounded-tl-lg rounded-md"
            >
              <div className="h-full w-full overflow-hidden rounded-md">
                <div
                  className="h-full bg-cover bg-no-repeat p-12 text-center relative hover:scale-110 hover:-rotate-1 duration-[2s] rounded-md"
                  style={{
                    backgroundImage: `url(${img1})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <div
                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed flex items-center justify-center rounded-md"
                    style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
                  ></div>
                </div>
                <div className="absolute z-30 top-1/2 -translate-y-1/2 text-center text-white w-full">
                  <span className="mx-auto inline-block text-6xl">
                    <MdLocationCity />
                  </span>
                  <p className="text-white w-full">
                    Mirpur 10, Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              className="w-full flex items-center justify-center bg-red-300 rounded-tl-lg rounded-md"
            >
              <div className="h-full w-full overflow-hidden rounded-md">
                <div
                  className="h-full bg-cover bg-no-repeat p-12 text-center relative hover:scale-110 hover:-rotate-1 duration-[2s] rounded-md"
                  style={{
                    backgroundImage: `url(${img2})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <div
                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed flex items-center justify-center rounded-md"
                    style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
                  ></div>
                </div>
                <div className="absolute z-30 top-1/2 -translate-y-1/2 text-center text-white w-full">
                  <span className="mx-auto inline-block text-6xl">
                    <MdCall />
                  </span>
                  <p className="text-white">+880 1719-199967</p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              className="w-full flex items-center justify-center bg-red-300 rounded-tl-lg rounded-md"
            >
              <div className="h-full w-full overflow-hidden rounded-md">
                <div
                  className="h-full bg-cover bg-no-repeat p-12 text-center relative hover:scale-110 hover:-rotate-1 duration-[2s] rounded-md"
                  style={{
                    backgroundImage: `url(${img3})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <div
                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed flex items-center justify-center rounded-md"
                    style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
                  ></div>
                </div>
                <div className="absolute z-30 top-1/2 -translate-y-1/2 text-center text-white w-full">
                  <span className="mx-auto inline-block text-6xl">
                    <MdWhatsapp />
                  </span>
                  <p className="text-white">+880 1719-199967</p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              className="w-full flex items-center justify-center bg-red-300 rounded-tl-lg rounded-md"
            >
              <div className="h-full w-full overflow-hidden rounded-md">
                <div
                  className="h-full bg-cover bg-no-repeat p-12 text-center relative hover:scale-110 hover:-rotate-1 duration-[2s] rounded-md"
                  style={{
                    backgroundImage: `url(${img4})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <div
                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed flex items-center justify-center rounded-md"
                    style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
                  ></div>
                </div>
                <div className="absolute z-30 top-1/2 -translate-y-1/2 text-center text-white w-full">
                  <span className="mx-auto inline-block text-6xl">
                    <SiGmail />
                  </span>
                  <p className="text-white">ataullahm100 @gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[55%] lg:w-[45%] flex items-center">
          <div
            data-aos="zoom-out-down"
            className="w-full h-72 md:min-h-[350px] lg:min-h-[510px] rounded-3xl border-2 border-secondColor"
            style={{
              backgroundImage: `url(${images})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* <img src={images} alt="" /> */}
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
