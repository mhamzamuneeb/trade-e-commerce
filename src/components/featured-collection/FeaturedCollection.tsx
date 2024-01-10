import { Carousel } from "antd";
import ProductCard from "../product-card/ProductCard";
import { useEffect, useRef, useState } from "react";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { CarouselRef } from "antd/es/carousel";

interface FeaturedCollectionProps {
  sharedData: any; // Assuming sharedData is of type string, you can adjust it based on your actual data type
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({
  sharedData,
}) => {
  const collectionRef = useRef<HTMLDivElement | null>(null); // Specify the type for collectionRef
  const [data, setData] = useState<Product[]>([]);
  useEffect(() => {
    if (sharedData) {
      console.log("Data change");
      // Side effect code goes here
      fetch(`https://fakestoreapi.com/products/category/${sharedData}`)
        .then((res) => res?.json())
        .then((json) => {
          setData(json);
          console.log(json);
        });
    }
    // Cleanup function (optional)
    collectionRef.current?.scrollIntoView({ behavior: "smooth" });

    return () => {
      console.log("Component will unmount (cleanup)");
      // Perform cleanup (unsubscribe, clear intervals, etc.)
    };
  }, [sharedData]);

  useEffect(() => {
    console.log("Initial call");
    // Side effect code goes here
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res?.json())
      .then((json) => {
        setData(json);
        console.log(json);
      });

    // Cleanup function (optional)
    return () => {
      console.log("Component will unmount (cleanup)");
      // Perform cleanup (unsubscribe, clear intervals, etc.)
    };
  }, []);

  const ref = useRef<CarouselRef>(null);
  const goNext = () => {
    ref.current?.next();
  };
  const goPrev = () => {
    ref.current?.prev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    loop: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
    autoplay: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const carouselArrowStyling = {
    width: "25px",
    height: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100px",
    background: "rgba(0,0,0,0.08)",
    padding: "20px",
  };
  return (
    <div className="section" ref={collectionRef}>
      <div className="flex items-center">
        <h2>Flash Sales</h2>
        {/* <div className="ml-auto">Timer</div> */}
        <div className="carousel-arrows ml-auto flex items-center justify-center gap-2">
          <div
            onClick={goPrev}
            className="cursor-pointer"
            style={carouselArrowStyling}
          >
            <ArrowLeftOutlined />
          </div>
          <div
            onClick={goNext}
            style={carouselArrowStyling}
            className="cursor-pointer"
          >
            <ArrowRightOutlined />
          </div>
        </div>
      </div>

      <div className="">
        {data?.length != 0 && (
          <Carousel ref={ref} {...settings}>
            {data.map((product, index) => (
              <ProductCard data={product} key={product?.id} />
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default FeaturedCollection;
