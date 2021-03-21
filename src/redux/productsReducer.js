import allProducts from "../services/data";

//criar uma copia
const initialState = [...allProducts];

//criar uma funcao reducer e devolver esse estado
export default (state = initialState, action) => {
  return state;
};
