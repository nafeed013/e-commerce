import React from "react";
import CartItem from "@/components/CartItem";

const Cart = () => {
  return (
    <div className="flex justify-between p-7">
      <section className="flex flex-col gap-4 w-2/3">
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
      </section>
      <section className="bg-base-200 w-64 h-40 rounded-box flex justify-between p-5">
        <div className="flex flex-col gap-5">
          <p>Items :</p>
          <p>SubTotal :</p>
          <p>Total :</p>
        </div>
        <div className="flex flex-col gap-5">
          <p>8</p>
          <p>$784</p>
          <p>$678</p>
        </div>
      </section>
    </div>
  );
};

export default Cart;
