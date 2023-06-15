import { useContext } from "react";
import { cartContext } from "../Context";

const Modal = () => {
  const { state, dispatch } = useContext(cartContext);
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart</h4>
        <div className="btn-container">
          <button
            className="clear-btn"
            onClick={() => dispatch({ type: "CLOSE" })}
          >
            cancel
          </button>
          <button
            className="confirm-btn"
            onClick={() => {
              dispatch({ type: "CLEAR_CART" });
              dispatch({ type: "CLOSE" });
            }}
          >
            confirm
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
