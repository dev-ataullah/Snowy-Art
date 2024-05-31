import slide1 from '../../assets/banner/img1.jpg';
import slide2 from '../../assets/banner/img2.jpg';
import slide3 from '../../assets/banner/img3.png';
import slide4 from '../../assets/banner/img4.png';
import slide5 from '../../assets/banner/img5.jpg';
import slide6 from '../../assets/banner/img6.jpg';
import slide7 from '../../assets/banner/img7.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation, Autoplay, Keyboard } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
  return (
    <div className="h-[400px] md:min-h-screen">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3300,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, Keyboard]}
        className="mySwiper h-[400px] md:min-h-screen relative"
      >
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-no-repeat p-12 text-center "
            style={{
              backgroundImage: `url(${slide1})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
              style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
            ></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-no-repeat p-12 text-center"
            style={{
              backgroundImage: `url(${slide2})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
              style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
            ></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-no-repeat p-12 text-center"
            style={{
              backgroundImage: `url(${slide3})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
              style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
            ></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-no-repeat p-12 text-center"
            style={{
              backgroundImage: `url(${slide4})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
              style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
            ></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-no-repeat p-12 text-center"
            style={{
              backgroundImage: `url(${slide5})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
              style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
            ></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-no-repeat p-12 text-center"
            style={{
              backgroundImage: `url(${slide6})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
              style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
            ></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-no-repeat p-12 text-center"
            style={{
              backgroundImage: `url(${slide7})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
              style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
            ></div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="h-[400px] md:min-h-screen absolute top-0 left-0 z-10 w-full flex items-center justify-center ">
        <h1 className="bannerFont text-4xl md:text-7xl text-white text-center max-w-[750px] mx-auto px-4">
          <Typewriter
            cursor
            cursorBlinking
            cursorColor="#fa983a"
            delaySpeed={1000}
            deleteSpeed={25}
            loop={0}
            typeSpeed={95}
            words={[
              'Discover the Magic of Snowy Artistry',
              'Embrace the Chill with Creative Crafts',
              'Crafting Cozy Moments in the Snow',
              'Unleash Your Imagination in Snowy Art',
            ]}
          />
        </h1>
      </div>
    </div>
  );
};

export default Banner;
