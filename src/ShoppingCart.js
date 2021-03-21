import { useSelector } from "react-redux";
export default function ShoppingCart() {
  const cart = useSelector(state => state.cart);
  return (
    <div className="cart">
      <div className="">
        <h3>Carrinho</h3>
      </div>
      <div className="">
        <table className="table">
          <thead>
            <tr>
              <td>Produto</td>
              <td>Preço</td>
              <td>Qtd</td>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.qtd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
