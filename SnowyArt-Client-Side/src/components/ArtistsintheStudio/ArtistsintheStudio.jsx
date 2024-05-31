import Marquee from 'react-fast-marquee';
import img1 from '../../assets/others/office2.jpg';
import img2 from '../../assets/others/office3.jpg';
import img3 from '../../assets/others/office1.png';

const ArtistsintheStudio = () => {
  return (
    <div className="pb-16">
      <div className="w-full text-center pb-5">
        <h1 className="text-4xl md:text-5xl font-bold border-b-4 border-secondColor inline-block text-center">
          Artists in the Studio
        </h1>

        <p
          data-aos="fade-down"
          className="mx-auto max-w-[700px] text-slate-400 my-6"
        >
          {`Explore 'Artists in the Studio' for a glimpse into the creative process. Discover unique pieces crafted by talented artisans, exclusively on SnowyArt.`}
        </p>
      </div>
      <div>
        <Marquee speed={100}>
          <div className="w-[450px] border p-4 rounded-md mr-10">
            <div className="h-[450px] w-full overflow-hidden rounded-md">
              <div
                className="h-full bg-cover bg-no-repeat p-12 text-center relative hover:scale-110 duration-500 rounded-md"
                style={{
                  backgroundImage: `url(${img1})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
            </div>
            <div className="text-center">
              <h1 className="text-3xl heightFont py-3">
                Caricature Artist at Work
              </h1>
              <p>
                Step into the whimsical world of caricature artistry. Our
                Caricature Artist at Work card captures the joy of playful
                portraits.
              </p>
            </div>
          </div>
          <div className="w-[450px] border p-4 rounded-md mr-10">
            <div className="h-[450px] w-full overflow-hidden rounded-md">
              <div
                className="h-full bg-cover bg-no-repeat p-12 text-center relative hover:scale-110 duration-500 rounded-md"
                style={{
                  backgroundImage: `url(${img2})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
            </div>
            <div className="text-center">
              <h1 className="text-3xl heightFont py-3">
                Creativity Finds Expression
              </h1>
              <p>
                Discover boundless expression with our Creativity Finds
                Expression card, celebrating the beauty of artistry and the joy
                of creation.
              </p>
            </div>
          </div>
          <div className="w-[450px] border p-4 rounded-md mr-10">
            <div className="h-[450px] w-full overflow-hidden rounded-md">
              <div
                className="h-full bg-cover bg-no-repeat p-12 text-center relative hover:scale-110 duration-500 rounded-md"
                style={{
                  backgroundImage: `url(${img3})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
            </div>
            <div className="text-center">
              <h1 className="text-3xl heightFont py-3">
                Indelible Watercolor Impression
              </h1>
              <p>
                {`
              Unleash the captivating allure of watercolors with our "Watercolor Makes Indelible Impression!" card, showcasing the timeless beauty of artistic expression.`}
              </p>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default ArtistsintheStudio;
