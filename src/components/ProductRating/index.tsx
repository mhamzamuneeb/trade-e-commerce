import { StartFillSvg, StartEmptySvg } from "@/assets/icons/icons";

const ProductRating = ({ rating }: any) => {
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

export default ProductRating;
