import { languages } from "./UIConstants";
import { labels as enLabels } from "../resources/en-us";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img5 from "../assets/images/5.jpg";
export let labels = { ...enLabels };

export const getCurrentResource = () => {
  const currentLang = languages.EN;
  switch (currentLang) {
    case languages.EN:
    case languages.HND:
    case languages.MRT:
      labels = { ...enLabels };
  }
};

export const images = [
  {
    img: img2,
    // heading: "Image1",
    // description:
    //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo aspernatur mollitia illum libero, sed voluptatem officia obcaecati ex autem accusamus.",
  },
  {
    img: img3,
    // heading: "Image2",
    // description:
    //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo aspernatur mollitia illum libero, sed voluptatem officia obcaecati ex autem accusamus.",
  },
  {
    img: img5,
    // heading: "Image3",
    // description:
    //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo aspernatur mollitia illum libero, sed voluptatem officia obcaecati ex autem accusamus.",
  },
];
