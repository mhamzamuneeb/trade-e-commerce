import React, { useState, useEffect, useRef } from "react";
import ProductCard from "../product-card/ProductCard";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const loader = useRef(null);

  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products?limit=${page * 5}`
      ); // Replace with your actual API endpoint and query parameter for pagination if needed
      const newProducts = await response.json();
      // setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      setProducts(newProducts);
    };

    fetchProducts();
  }, [page]);

  // IntersectionObserver setup for lazy loading
  useEffect(() => {
    var options = {
      root: null, // viewport
      rootMargin: "20px",
      threshold: 1.0,
    };

    // Callback function to load more items
    const handleObserver = (entities: any) => {
      const target = entities[0];
      if (target.isIntersecting) {
        setPage((prev) => prev + 1); // Load next page
      }
    };

    // Create an observer
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full px-5 max-md:max-w-full">
      {/* Products grid */}
      <div className="grid grid-cols-4 gap-5 max-md:grid-cols-1">
        {/* Map over the products and display each product */}
        {products.map((product: any) => (
          <ProductCard data={product} key={product.id} />

          // <div
          //   key={product.id}
          //   className="flex flex-col items-stretch max-md:w-full max-md:ml-0"
          // >
          //   <div className="items-stretch flex grow flex-col max-md:mt-8">
          //     <img
          //       loading="lazy"
          //       src={product.image}
          //       alt={product.title}
          //       className="aspect-[1.08] object-contain object-center w-full overflow-hidden"
          //     />
          //     <div className="text-black text-base font-medium leading-6 mt-4">
          //       {product.title}
          //     </div>
          //     <div className="text-red-500 text-base font-medium leading-6 mt-2">
          //       ${product.price}
          //     </div>
          //   </div>
          // </div>
        ))}
      </div>
      {/* Loader element for lazy loading */}
      {/* <div ref={loader} className="loading">
        Loading...
      </div> */}
    </div>
  );
}

export default ProductList;
