import { useContext, useEffect } from "react";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import { cartContext } from "./Context";
import Modal from "./components/Modal";

const App = () => {
  const {
    state: { cartItems, isOpen },
    dispatch,
  } = useContext(cartContext);

  useEffect(() => {
    dispatch({ type: "CART_TOTAL" });
  }, [cartItems]);
  return (
    <div>
      {isOpen && <Modal />}

      <Header />
      <Cart />
    </div>
  );
};
export default App;
