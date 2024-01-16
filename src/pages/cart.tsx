import CustomButton from "@/components/CustomButton";
import { CartRow } from "@/components/cartRow/CartRow";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";

function CartDetail() {
  const router = useRouter();
  // const cart = router.query?.cart;
  //   console.log(cart);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const navigate = useRouter();
  console.log("all prods", products);
  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      console.log("run");
      const response = await fetch("https://fakestoreapi.com/carts/1"); // Replace with your actual API endpoint and query parameter for pagination if needed
      const newProducts = await response.json();
      console.log(newProducts, "newProducts");
      setCart(newProducts?.products);
      // const allProducts = newProducts?.products?.map(async (item, index) => {
      //   console.log("id", item?.productId, index);
      //   await fetch(`https://fakestoreapi.com/products/${item?.productId}`)
      //     .then((res) => res.json())
      //     .then(async (json) => {
      //       console.log(json.title);
      //       // await setProducts((prevProducts) => [...prevProducts, json]);

      //       return json;
      //     });
      // });
      // console.log("all", allProducts);
      //   setProducts((prevProducts) => [...prevProducts, json]);

      //   setProducts((prevProducts) => [...prevProducts, ...newProducts]);
    };

    fetchProducts();
    // fetch(`https://fakestoreapi.com/products?limit=5`)
    //   .then((res) => res?.json())
    //   .then((json) => {
    //     setProducts(json);
    //     console.log(json);
    //   });
  }, []);
  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products`); // Replace with your actual API endpoint and query parameter for pagination if needed
      const newProducts = await response.json();
      // setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      const productsFinal = newProducts?.map((item: any) => {
        const matchingItem: any = cart?.find(
          (cartItem: any) => item.id === cartItem?.productId
        );
        if (matchingItem) {
          return {
            ...item,
            quantity: matchingItem?.quantity,
          };
        }
        return null;
      });
      console.log("final proeucts", productsFinal);
      const filteredProducts = productsFinal?.filter((item: any) => {
        return item !== null;
      });
      console.log("filtered proeucts", filteredProducts);
      setProducts(filteredProducts);
    };

    fetchProducts();
  }, [cart]);
  const changeQty = (id: number, qty: number) => {
    const updatedProd = products?.map((item) => {
      if (item?.id === id) {
        return { ...item, quantity: qty };
      }
      return item;
    });
    setProducts(updatedProd);
    console.log("updatedProd", updatedProd, id, qty);
  };
  const returnToShop = (event) => {
    event.preventDefault();
    navigate.push(`/`);
  };
  return (
    <div className="w-full px-5 max-md:max-w-full section page-width">
      <div className={`cart-header-row flex items-center	`}>
        <span className="cart-product-title">Product</span>
        <span className="cart-product-price">Price</span>
        <span className="cart-product-quantity">Quantity</span>
        <span className="cart-product-total">Subtotal</span>
      </div>
      <div className="cart-products-container">
        {products &&
          products?.map((product: any) => (
            <CartRow data={product} key={product?.id} changeQty={changeQty} />
          ))}
      </div>
      <div className="cart-cta flex justify-between items-center">
        <CustomButton
          btnSize="large"
          btnType="defaults"
          btnText={"Return to Shop"}
          handleSubmit={returnToShop}
        />
        <CustomButton
          btnSize="large"
          btnType="defaults"
          btnText={"Update Cart"}
          handleSubmit={null}
        />
      </div>
      <div className="cart-total-container flex justify-end items-center">
        <div className="cart-total">
          <h4>Cart Total</h4>
          <p>
            <span>Subtotal</span>
            <span>$1750</span>
          </p>
          <p>
            <span>Shipping</span>
            <span>Free</span>
          </p>
          <CustomButton
            btnSize="large"
            btnType="primary"
            btnText={"Proceed To Checkout"}
            handleSubmit={null}
          />
        </div>
      </div>
    </div>
  );
}

export default CartDetail;
