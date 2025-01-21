import Testimonials from "../components/common/Testimonials";
import StyledCarousel from "../components/common/Carousel";
import { images } from "../util/UtilityFunctions";
function Home() {
  return (
    <section
      className=" relative
    "
    >
      <section className="top-0">
        <StyledCarousel data={images} interval={1000} />
        <section className=" h-80">Features</section>
        <section className="py-24">
          <Testimonials />
        </section>
      </section>
    </section>
  );
}

export default Home;
