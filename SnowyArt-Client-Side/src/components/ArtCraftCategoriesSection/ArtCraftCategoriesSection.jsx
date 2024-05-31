import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const ArtCraftCategoriesSection = ({ data }) => {
  return (
    <div className="pb-10">
      <div>
        <h1 className="text-3xl md:text-5xl text-center pt-5 font-bold pb-2">
          Art & Craft Categories
        </h1>
        <p className="max-w-[700px] mx-auto text-center ">
          {`Explore a winter wonderland of creativity with SnowyArt's diverse art and craft categories, offering inspiration and supplies for every project.`}
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((dta) => (
          <div
            key={dta._id}
            className="border-2 border-firstColor rounded-lg hover:scale-[1.03] duration-200"
          >
            <Link to={`/categorie/${dta.categories_name}`}>
              <div className="cursor-pointer">
                <div className="rounded-t-md h-52 w-full overflow-hidden">
                  <div
                    className="h-full bg-cover bg-no-repeat p-12 text-center rounded-t-md relative hover:scale-110 hover:-rotate-3 duration-[2s]"
                    style={{
                      backgroundImage: `url(${dta.pic})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div
                      className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed rounded-t-md flex items-center justify-center"
                      style={{ backgroundColor: ' rgba(0, 0, 0, 0.4)' }}
                    ></div>
                  </div>
                </div>
                <h1 className="text-3xl text-center font-bold py-3 px-2">
                  {dta.categories_name}
                </h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtCraftCategoriesSection;
ArtCraftCategoriesSection.propTypes = {
  data: PropTypes.array,
};
