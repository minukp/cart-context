import { useContext, useEffect } from "react";
import { cartContext } from "../Context";
import CartItem from "../components/CartItem";

const Cart = () => {
  const {
    state: { cartItems, amount, total },
    dispatch,
  } = useContext(cartContext);

  // console.log(useContext(cartContext));
  if (amount < 1) {
    return (
      <main className="cart">
        <h2>Your bag</h2>
        <h4 className="empty-cart">Your cart is empty</h4>
      </main>
    );
  }
  return (
    <main className="cart">
      <h2>Your bag</h2>
      <section>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </section>
      <footer className="cart-footer">
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className="clear-btn"
          onClick={() => dispatch({ type: "OPEN" })}
        >
          Clear cart
        </button>
      </footer>
    </main>
  );
};
export default Cart;
