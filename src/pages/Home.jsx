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
        <section className=" h-80">Testimonials</section>
        <section id="About" className=" h-80">
          About
        </section>
        <section id="Contact" className=" h-80">
          Contact
        </section>
      </section>
    </section>
  );
}

export default Home;
