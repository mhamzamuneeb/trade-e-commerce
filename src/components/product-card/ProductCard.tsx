import { StartEmptySvg, StartFillSvg } from "@/assets/icons/icons";
import Image from "next/image";
// import "@/components/product-card/style.scss";

// import "./style.scss";
// type props = {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating: {
//     rate: number;
//     count: number;
//   };
// }
const ProductCard = (props) => {
  const { id, title, price, description, category, image, rating } = props.data;

  const RatingComponent = () => {
    return (
      <div className="flex items-center">
        {Array.from({ length: Math.ceil(rating?.rate) }, (_, index) => (
          <StartFillSvg key={index} />
        ))}
        {Array.from({ length: 5 - Math.ceil(rating?.rate) }, (_, index) => (
          <StartEmptySvg key={index} />
        ))}
      </div>
    );
  };
  return (
    <div className="product-card basis-1/4 p-3" product-id={id}>
      <div
        className="overflow-hidden rounded-lg"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <a href="image">
          <Image
            style={{ height: "250px" }}
            className="object-contain w-full"
            src={image}
            alt=""
            width={250}
            height={250}
            priority
          />
        </a>
        <button className="p-2 transition-transform	 atc-btn translate-y-full bg-black text-white w-full">
          Add to Cart
        </button>
      </div>
      <a href="image">
        <h6>{title}</h6>
        <h6>
          <span className="text-color-secondary">${price}</span>{" "}
          <span className="line-through text-color-fade ml-1">
            {" "}
            ${price + 50}
          </span>
          <span></span>
        </h6>
        <div className="flex items-center">
          {/* <RatingComponent /> */}

          <span className="text-color-fade ml-2">({rating.count})</span>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
