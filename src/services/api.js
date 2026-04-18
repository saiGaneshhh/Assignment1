// import content from "../data/content.json";
import content from '../data/content.json';

export const fetchHeroContent = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(content.hero), 1200);
  });
};

export const fetchFeaturesContent = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(content.featuresSection), 1200);
  });
};