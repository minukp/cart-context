import { createContext, useReducer } from "react";
import cartItems from "./cartItems";

export const cartContext = createContext();

const initialState = {
  cartItems,
  amount: 1,
  total: 0,
  isLoading: false,
  isOpen: false,
};
const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cartItems: [], amount: 0 };
  }
  if (action.type === "REMOVE_FROM_CART") {
    const newItems = state.cartItems.filter(
      (item) => item.id !== action.payload
    );
    return { ...state, cartItems: newItems };
  }
  if (action.type === "CART_TOTAL") {
    let total = 0;
    let amount = 0;
    total = state.cartItems.reduce(
      (accu, curr) => curr.price * curr.amount + accu,
      0
    );
    amount = state.cartItems.reduce((accu, curr) => curr.amount + accu, 0);
    //console.log(total);
    return { ...state, total, amount };
  }
  if (action.type === "INCREASE") {
    //finding the cartItem to be updated
    const cartItem = state.cartItems.find((item) => item.id === action.payload);

    //finding the index of the cartItem
    const itemIndex = state.cartItems.findIndex(
      (item) => item.id === cartItem.id
    );
    if (itemIndex !== -1) {
      const updatedCartItems = [...state.cartItems];
      updatedCartItems[itemIndex].amount += 1;
      return { ...state, cartItems: updatedCartItems };
    } else {
      const updatedCartItems = [...state.cartItems, cartItem];
      return { ...state, cartItems: updatedCartItems };
    }
  }
  if (action.type === "DECREASE") {
    const newItem = state.cartItems.find((item) => item.id === action.payload);
    const itemIndex = state.cartItems.findIndex(
      (item) => item.id === newItem.id
    );
    if (itemIndex !== -1) {
      const newCartItems = [...state.cartItems];
      newCartItems[itemIndex].amount -= 1;
      return { ...state, cartItems: newCartItems };
    } else {
      const newCartItems = [...state.cartItems, newItem];
      return { ...state, cartItems: newCartItems };
    }
  }

  if (action.type === "OPEN") {
    //state.isOpen = true;
    console.log("open odal");
    return { ...state, isOpen: true };
  }
  if (action.type === "CLOSE") {
    return { ...state, isOpen: false };
  }

  return state;
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default Context;
