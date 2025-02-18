import Testimonials from "../components/common/Testimonials";
import StyledCarousel from "../components/common/Carousel";
import { images } from "../util/UtilityFunctions";
import Render3DModel from "../components/common/Render3DModel";
import { Divider } from "@mui/material";
import Footer from "../components/common/Footer";
function Home() {
  const CarouselItem = (item) => {
    return <Render3DModel name={item?.heading} />;
  };
  return (
    <>
      <section
        className=" relative
    "
      >
        <section className="top-0">
          <StyledCarousel
            data={images}
            interval={1000}
            CarouselItem={CarouselItem}
          />
          <section className=" h-80">Features</section>
          <section className="py-24">
            <Testimonials />
          </section>
        </section>
      </section>
      <Divider />
      <Footer />
    </>
  );
}

export default Home;
