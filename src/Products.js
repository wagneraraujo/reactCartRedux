import { useSelector } from "react-redux";

export default function Produtcts() {
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
            <h4>R$ {item.price}</h4>
            <div>
              <button>Add Carrinho</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
