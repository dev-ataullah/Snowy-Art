import { Link } from 'react-router-dom';
import Contact from './Contact';
import banner from '../../assets/banner/img9.jpg';
import { Helmet } from 'react-helmet';

const ContactPage = () => {
  return (
    <div className="">
      <Helmet>
        <title>ContactUs | SnowyArt</title>
      </Helmet>
      {/* Top Banner Img */}
      <div className="h-48 md:h-64 bg-fuchsia-100">
        <div className="h-full w-full overflow-hidden">
          <div
            className="h-full bg-cover bg-no-repeat p-12 text-center relative hover:scale-110 hover:-rotate-1 duration-[2s] "
            style={{
              backgroundImage: `url(${banner})`,
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
            <Link to={'/contact'}>
              <button className="italic">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
      {/* End Banner top */}
      <div className="w-11/12 mx-auto">
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
