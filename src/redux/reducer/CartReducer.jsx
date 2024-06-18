const initaialData = {
  cartInitial: 0,
};

const CartReducer = (state = initaialData, action) => {
  // return state
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cartInitial: ++state.cartInitial,
      };
    case "remove_cart":
      return {
        cartInitial: state.cartInitial > 0 ? --state.cartInitial : 0,
      };
    default:
      return state;
  }
};
export default CartReducer;
