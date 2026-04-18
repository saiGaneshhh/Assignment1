import './ProductCard.css'

const ProductCard = ({ title, image }) => {
  return (
    <div className="card">
      <div className="imageWrapper">
        <img src={image} alt={title} />
      </div>
      <p className="title">{title}</p>
    </div>
  );
};

export default ProductCard;