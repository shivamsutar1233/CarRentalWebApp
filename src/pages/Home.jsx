import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img5 from "../assets/images/5.jpg";
import StyledCarousel from "../components/common/Carousel";
function Home() {
  const images = [
    {
      img: img2,
      heading: "Image1",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo aspernatur mollitia illum libero, sed voluptatem officia obcaecati ex autem accusamus.",
    },
    {
      img: img3,
      heading: "Image2",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo aspernatur mollitia illum libero, sed voluptatem officia obcaecati ex autem accusamus.",
    },
    {
      img: img5,
      heading: "Image3",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo aspernatur mollitia illum libero, sed voluptatem officia obcaecati ex autem accusamus.",
    },
  ];
  return (
    <section
      className=" relative
    "
    >
      <section className=" top-0">
        <StyledCarousel data={images} />
        <section className=" h-80">Quick boooking</section>
        <section className=" h-80">Features</section>
        <section className=" h-80">Testimonials</section>
      </section>
    </section>
  );
}

export default Home;
