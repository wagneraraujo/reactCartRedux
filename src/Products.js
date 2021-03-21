import { useSelector, useDispatch } from "react-redux";

export default function Produtcts() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  return (
    <div className="products">
      <div className="row listProducts">
        {products.map(item => (
          <div key={item.id} className="cardProdutos">
            <div>
              <img src={item.image} alt="" />
            </div>
            <h6>{item.name}</h6>
            <h4>R$ {item.price.toFixed(2)}</h4>
            <div>
              <button
                onClick={() => dispatch({ type: "ADD_CART", id: item.id })}
              >
                Add Carrinho
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
