import { useContent } from "../hooks/useContent";
import { fetchHeroContent } from "../services/api";
import GradientText from "../components/ui/GradientText";
import GradientButton from "../components/ui/GradientButton";
import Skeleton from "../components/ui/Skeleton";
import "./HeroSection.css";

const HeroSection = () => {
  const { data, loading, error, retry } = useContent(fetchHeroContent);

  if (loading) return <Skeleton />;
  if (error) return <button onClick={retry}>Retry</button>;

  return (
    <section className="hero">
      <div className="hero-box">
        <h1 className="hero-title">
          {data.headlinePrefix}<br/>
          <GradientText>{data.headlineGradient}</GradientText>
        </h1>

        <p className="hero-subtitle">{data.subheadline}</p>

        <div className="hero-btn">
          <GradientButton text={data.cta} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;