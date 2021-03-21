import { useDispatch, useSelector } from "react-redux";
export default function ShoppingCart() {
  const cart = useSelector(state =>
    state.cart.filter(item => {
      return item.qtd > 0;
    })
  );
  const dispatch = useDispatch();
  const totalQtd = useSelector(state =>
    state.cart.reduce((acc, cur) => acc + cur.qtd, 0)
  );

  const totalPrice = useSelector(state =>
    state.cart.reduce((acc, cur) => acc + cur.price * cur.qtd, 0)
  );

  return (
    <div className="cart">
      <div className="">
        <h3>Carrinho - Qtd: {totalQtd}</h3>
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
                <td>R$ {item.price.toFixed(2) * item.qtd}</td>
                <td className="td-space">
                  <button
                    onClick={() => dispatch({ type: "ADD_CART", id: item.id })}
                  >
                    +
                  </button>
                  {item.qtd}
                  <button
                    className="danger"
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_CART", id: item.id })
                    }
                  >
                    -
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td>Preço total</td>
              <td>{totalPrice}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
