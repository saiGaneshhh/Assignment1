import { useContent } from "../hooks/useContent";
import { fetchFeaturesContent } from "../services/api";
import ProductCard from "../components/ui/ProductCard";
import Carousel from "../components/ui/Carousel";
import Skeleton from "../components/ui/Skeleton";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  const { data, loading, error, retry } = useContent(fetchFeaturesContent);

  if (loading) return <Skeleton />;
  if (error) return <button onClick={retry}>Retry</button>;

  return (
    <section className="features">
      <div className="features-header">
        <h2 className="features-title">
          {data.title} <span className="accent">{data.titleAccent}</span>
        </h2>

        <p className="features-subtitle">{data.subtitle}</p>
      </div>

      <div className="features-carousel">
        <Carousel
          items={data.products.map((item, i) => (
            <ProductCard key={i} {...item} />
          ))}
        />
      </div>
    </section>
  );
};

export default FeaturesSection;