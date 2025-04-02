import React from "react";
import { Offcanvas, ListGroup, Button, ButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
  toggleCart,
} from "../../components/redux/CartSlice";
import { BiTrash } from "react-icons/bi"; // Import trash icon from react-icons

const Addtocart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const { cartItems, showCart } = useSelector((state) => state.cart);

  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle checkout button click
  const handleCheckout = () => {
    navigate("/checkout"); // Redirect to checkout page
    dispatch(toggleCart()); // Close the cart
  };

  return (
    <Offcanvas show={showCart} onHide={() => dispatch(toggleCart())} placement="end">
      <Offcanvas.Header>
        <Offcanvas.Title>🛒 Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length === 0 ? (
          <p className="text-center">No items in the cart.</p>
        ) : (
          <>
            <ListGroup style={{ maxHeight: "70vh", overflowY: "auto" }}>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.id} className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded me-3"
                      style={{ width: "50px" }}
                    />
                    <div>
                      <h6>{item.name}</h6>
                      <p className="text-muted mb-0">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    {/* Quantity Controls */}
                    <ButtonGroup size="sm">
                      <Button
                        variant="outline-secondary"
                        onClick={() => dispatch(decrementQuantity(item.id))}
                        disabled={item.quantity === 1}
                      >
                        -
                      </Button>
                      <Button variant="outline-secondary" disabled>
                        {item.quantity}
                      </Button>
                      <Button
                        variant="outline-secondary"
                        onClick={() => dispatch(incrementQuantity(item.id))}
                      >
                        +
                      </Button>
                    </ButtonGroup>
                    {/* Remove Icon */}
                    <Link
                      variant="link"
                      className="text-danger ms-2"
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      <BiTrash size={20} /> {/* Trash icon */}
                    </Link>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
            {/* Total Amount and Checkout Button */}
            <div className="mt-3">
              <h5 className="text-end">Total: ${totalAmount.toFixed(2)}</h5>
              <Button
                variant="primary"
                className="w-100 order_now"
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
              >
                Checkout
              </Button>
            </div>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Addtocart;