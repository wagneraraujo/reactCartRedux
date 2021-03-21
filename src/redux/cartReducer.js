import allProducts from "../services/data";

const initialState = allProducts.map(item => ({ ...item, qtd: 0 }));

export default (state = initialState, action) => {
  //possiveis acoes

  switch (action.type) {
    case "ADD_CART":
      return state.map(item => {
        item.id === action.id && item.qtd++;
        return item;
      });
    case "REMOVE_FROM_CART":
      return state;
    case "CLEAR_CART":
      return state;
    default:
      return state;
  }
};
