import Branding from "../components/Branding";
import BrowseByDress from "../components/BrowseByDress";
import FeedBack from "../components/FeedBack";
import NewArrival from "../components/NewArrival";
import TopSell from "../components/TopSell";

const Home = () => {
  return (
    <div>
      <div className="hidden bg-[url('/cover.png')] bg-cover bg-no-repeat bg-center w-[100%] lg:flex flex-col gap-10 p-10">
        <h1 className="lg:text-7xl md:text-6xl text-5xl text-start font-(family-name:--font-poppin-extrabold)">
          Find Cloths <br />
          That Matches <br /> Your Style
        </h1>
        <div className=" max-w-[600px] md:max-w-[500px]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            assumenda explicabo culpa eum exercitationem animi quam provident,
            voluptatibus ad quasi.
          </p>
        </div>
        <div>
          <button className="bg-black text-white py-3 px-10 rounded-3xl">
            Shop Now
          </button>
        </div>
        <div className="flex gap-9 mt-10 ">
          <div>
            <h3 className="lg:text-4xl font-(family-name:--font-poppin-medium)">
              200+
            </h3>
            <p className="lg:text-[16px]">International Brand</p>
          </div>
          <div>
            <h3 className="lg:text-4xl font-(family-name:--font-poppin-medium)">
              2000+
            </h3>
            <p className="lg:text-[16px]">Hight Quality Products</p>
          </div>
          <div>
            <h3 className="lg:text-4xl font-(family-name:--font-poppin-medium)">
              30000+
            </h3>
            <p className="lg:text-[16px]">Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="p-10 flex flex-col gap-9 ">
          <h1 className="lg:text-7xl md:text-6xl text-5xl text-start font-(family-name:--font-poppin-extrabold)">
            Find Cloths <br />
            That Matches <br /> Your Style
          </h1>
          <div className=" max-w-[600px] md:max-w-[500px]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              assumenda explicabo culpa eum exercitationem animi quam provident,
              voluptatibus ad quasi.
            </p>
          </div>
          <div>
            <button className="bg-black text-white py-3 px-10 rounded-3xl">
              Shop Now
            </button>
          </div>
          <div className="flex gap-9 mt-10 self-center">
            <div>
              <h3 className="md:text-4xl font-(family-name:--font-poppin-medium)">
                200+
              </h3>
              <p className="md:text-[16px]">International Brand</p>
            </div>
            <div>
              <h3 className="md:text-4xl font-(family-name:--font-poppin-medium)">
                2000+
              </h3>
              <p className="md:text-[16px]">Hight Quality Products</p>
            </div>
            <div>
              <h3 className="md:text-4xl font-(family-name:--font-poppin-medium)">
                30000+
              </h3>
              <p className="md:text-[16px]">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="bg-[url('/cover.png')] md:bg-cover bg-no-repeat md:bg-top-right bg-position-[top_right_-3rem] h-[80vh] flex flex-col gap-13 p-10"></div>
      </div>
      <NewArrival />
      <TopSell />
      <BrowseByDress />
      <FeedBack />
    </div>
  );
};

export default Home;
