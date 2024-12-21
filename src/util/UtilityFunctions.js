import { languages } from "./UIConstants";
import { labels as enLabels } from "../resources/en-us";
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
