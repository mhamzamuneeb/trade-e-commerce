import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import ProductCard from "@/components/product-card/ProductCard";
function CartDetail() {
  const router = useRouter();
  const cart = router.query?.cart;
  //   console.log(cart);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      console.log("run");
      const response = await fetch("https://fakestoreapi.com/carts/1"); // Replace with your actual API endpoint and query parameter for pagination if needed
      const newProducts = await response.json();
      console.log(newProducts.products);
      const allProducts = newProducts?.products?.map(async (item, index) => {
        console.log("id", item?.productId, index);
        await fetch(`https://fakestoreapi.com/products/${item?.productId}`)
          .then((res) => res.json())
          .then(async (json) => {
            console.log(json.title);
            await setProducts((prevProducts) => [...prevProducts, json]);

            return json;
          });
      });
      console.log("all", allProducts);
      //   setProducts((prevProducts) => [...prevProducts, json]);

      //   setProducts((prevProducts) => [...prevProducts, ...newProducts]);
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full px-5 max-md:max-w-full section page-width">
      {/* Products grid */}
      <div className="grid grid-cols-4 gap-5 max-md:grid-cols-1">
        {/* Map over the products and display each product */}
        {products &&
          products?.map((product: any) => (
            <ProductCard data={product} key={product?.id} />
          ))}
      </div>
    </div>
  );
}

export default CartDetail;
