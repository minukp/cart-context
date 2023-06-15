import { useContext } from "react";
import { cartContext } from "../Context";
import { ChevronDown, ChevronUp } from "../icons";

const CartItem = ({ id, img, title, price, amount }) => {
  const { dispatch } = useContext(cartContext);
  //console.log(dispatch);
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}</h4>
        <button
          className="remove-btn"
          onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: id })}
        >
          Remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => dispatch({ type: "INCREASE", payload: id })}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => dispatch({ type: "DECREASE", payload: id })}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
