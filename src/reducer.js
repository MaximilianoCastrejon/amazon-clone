export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.providerItem],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      var newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "REMOVE_PRODUCT":
      var newBasket = [...state.basket];
      if (action.id) {
        newBasket = state.basket.filter((x) => x.id !== action.id);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      console.log(newBasket);

      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
