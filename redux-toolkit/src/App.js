import Navbar from "./component/Navbar";
import CartContainer from "./component/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotal } from "./features/cart/cartSlice";
import Model from "./component/Model";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.model);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  return (
    <div>
      {isOpen && <Model />}

      <Navbar />
      <CartContainer />
    </div>
  );
}
export default App;
