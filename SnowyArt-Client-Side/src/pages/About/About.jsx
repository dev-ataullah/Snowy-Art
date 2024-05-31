import { Link } from 'react-router-dom';
import banner from '../../assets/banner/img1.jpg';
import img1 from '../../assets/others/about.jpg';
import { Helmet } from 'react-helmet';
const About = () => {
  return (
    <div>
      <Helmet>
        <title>AboutUs | SnowyArt</title>
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
            <Link to={'/about'}>
              <button className="italic">About Us</button>
            </Link>
          </div>
        </div>
      </div>
      {/* End Banner top */}
      <div className="w-11/12 mx-auto flex flex-col-reverse lg:flex-row gap-4 my-10">
        <div className="w-full lg:w-3/5">
          <h1 className="text-2xl lg:text-3xl leading-10 font-bold">
            Welcome to SnowyArt, where creativity meets craftsmanship in a
            winter wonderland of artistic inspiration!
          </h1>
          <p className="text-justify pt-5 leading-7">
            {` At SnowyArt, we're passionate about all things creative, and we believe that art is more than just a hobby—it's a way of life. Whether you're an experienced artist or just starting out on your creative journey, our platform is here to inspire, support, and celebrate your unique vision.`}
            <br />
            <br />
            Our mission is simple: to provide a vibrant online space where
            artists and crafters of all levels can come together to explore,
            learn, and share their passion for creativity. From painting and
            drawing to pottery and sculpture, from knitting and crocheting to
            jewelry making and beyond, SnowyArt is your go-to destination for
            all things arts and crafts.
            <br />
            <br />
            {`But SnowyArt is more than just a marketplace—it's a community.`}
            Connect with fellow artists, exchange tips and techniques, and
            discover new ways to express yourself through your craft. Whether
            {`  you're looking for inspiration for your next project or seeking
            advice on how to take your skills to the next level, you'll find a`}
            warm welcome and a wealth of resources here at SnowyArt.
            <br />
            <br />
            So come on in, explore our virtual galleries, shop for unique
            handcrafted treasures, and join us in celebrating the joy of
            {` creativity. Whether you're crafting a masterpiece or simply
            indulging in a creative escape, SnowyArt is here to inspire you`}
            every step of the way. Welcome to our creative family!
          </p>
        </div>
        <div className="w-full lg:w-2/5">
          <div className="w-full ">
            <div
              className="min-h-[400px] rounded-lg lg:min-h-[600px] bg-cover bg-no-repeat w-full"
              style={{
                backgroundImage: `url(${img1})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
