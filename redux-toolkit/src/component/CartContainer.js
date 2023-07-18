import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, restore } from "../features/cart/cartSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total, id } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
        </header>
        <h4 className="empty-cart">currently empty</h4>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>N{total.toFixed(2)}</span>
          </h4>
        </div>

        <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>
          clear Cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
