import React from "react";
import { useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/actions";

const CartItem = ({ product = {} }) => {
  const dispatch = useDispatch();

  // Check if product is undefined or empty
  if (!product || Object.keys(product).length === 0) {
    return <p className="text-center text-muted">No product available</p>;
  }

  const handleButton = (action) => {
    if (action === "increase") {
      dispatch(addCart(product));
    } else if (action === "decrease") {
      dispatch(delCart(product));
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4">
          {product.image ? (
            <img src={product.image} alt={product.title} height="200px" width="180px" />
          ) : (
            <p className="text-muted">No Image Available</p>
          )}
        </div>

        <div className="col-md-4">
          <h3>{product.title || "Unknown Product"}</h3>
          <p className="lead fw-bold">
            {product.qty || 0} X ${product.price || 0} = ${product.qty ? product.qty * product.price : 0}
          </p>

          <button className="btn btn-outline-dark me-4" onClick={() => handleButton("decrease")}>
            <i className="fa fa-minus"></i>
          </button>

          <button className="btn btn-outline-dark" onClick={() => handleButton("increase")}>
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
