import BikeView from "@/components/categories/bikes/page";
import CarView from "@/components/categories/cars/page";
import HouseView from "@/components/categories/houses/page";
import JobView from "@/components/categories/job/page";
import LandView from "@/components/categories/land/page";
import MobileView from "@/components/categories/mobile/page";
import TabletView from "@/components/categories/tablets/page";
import Menu from "@/components/menu";
import Slider from "@/components/slider";

const Home = () => {
  return (
    <div>
      {/* menu */}
      <div className="px-20 mt-4">
        <Menu />
        <div className="my-10">
          <Slider />
        </div>
        <div className="my-10">
          <MobileView />
        </div>
        <div className="my-10">
          <CarView />
        </div>
        <div className="my-10">
          <BikeView />
        </div>
        <div className="my-10">
          <HouseView />
        </div>
        <div className="my-10">
          <TabletView />
        </div>
        <div className="my-10">
          <LandView />
        </div>
        <div className="my-10">
          <JobView />
        </div>
      </div>
    </div>
  );
};

export default Home;
