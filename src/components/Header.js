import { useContext } from "react";
import { CartIcon } from "../icons";
import { cartContext } from "../Context";

const Header = () => {
  const {
    state: { amount },
  } = useContext(cartContext);
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
