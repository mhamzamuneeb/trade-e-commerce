import ProductCard from "../product-card/ProductCard";
import MyCarousel from "./carousel";
const FeaturedCollection = () => {
  return (
    <div>
      <h1>This is MyComponent</h1>
      <div className="carousel">{/* <MyCarousel /> */}</div>
      <p>Replace this content with your own component logic.</p>
      <ProductCard />
    </div>
  );
};

export default FeaturedCollection;
