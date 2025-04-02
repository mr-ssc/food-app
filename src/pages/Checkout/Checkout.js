import React from "react";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";


const Checkout = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    navigate("/"); // Redirect to home page after order placement
  };

  return (
    <>
    <Header/>
    <section className="hero_section">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="hero_text text-center">
                                    <h1 className="text-white">Checkout</h1>
                                    {/* <h2 className="text-white">Yummy & Wow Burger</h2> */}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
      <Container className="checkout-page my-5">
        <Row>
          {/* User Details and Payment Section */}
          <Col md={7}>
            <Card className="mb-4">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  {/* User Details */}
                  <h5 className="mb-3">Contact Information</h5>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                  </Form.Group>

                  <h5 className="mb-3">Shipping Address</h5>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" required />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="123 Main St" required />
                  </Form.Group>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City" required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control type="text" placeholder="Postal Code" required />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Country</Form.Label>
                    <Form.Control as="select" required>
                      <option value="">Select Country</option>
                      <option value="USA">United States</option>
                      <option value="IN">India</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                    </Form.Control>
                  </Form.Group>

                  {/* Payment Methods */}
                  <h5 className="mb-3">Payment Method</h5>
                  <Form.Group className="mb-3">
                    <Form.Check
                      type="radio"
                      id="credit-card"
                      label="Credit Card"
                      name="paymentMethod"
                      defaultChecked
                    />
                    <Form.Check
                      type="radio"
                      id="paypal"
                      label="PayPal"
                      name="paymentMethod"
                    />
                    <Form.Check
                      type="radio"
                      id="cod"
                      label="Cash on Delivery"
                      name="paymentMethod"
                    />
                  </Form.Group>

                  {/* Place Order Button */}
                  <Link variant="" type="submit" className="btn order_now btn_red w-100">
                    Place Order
                  </Link>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Order Summary Section */}
          <Col md={5}>
            <Card>
              <Card.Body >
                <Card.Title>Order Summary</Card.Title>
                <div style={{ maxHeight: "70vh", overflowY: "auto" }}>

                {cartItems.map((item) => (
                  <div key={item.id} className="d-flex align-items-center mb-3" >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="checkout-item-image"
                      />
                    <div className="ms-3">
                      <h6>{item.name}</h6>
                      <p className="text-muted mb-0">${item.price.toFixed(2)}</p>
                      <p className="text-muted mb-0">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                ))}
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <h5>Total:</h5>
                  <h5>${totalAmount.toFixed(2)}</h5>
                </div>
              </Card.Body>
              
            </Card>
          </Col>
          
        </Row>
      </Container>

      <Footer/>
    </>
  );
};

export default Checkout;