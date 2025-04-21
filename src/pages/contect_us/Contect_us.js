// contact.js
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../../components/Layouts/Footer";
import Header from "../../components/Layouts/Header";
function Contect_us() {
    return (
        <>
            <Header />
            <section className="hero_section">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="hero_text text-center">
                                <h1 className="text-white">Our Contect_us</h1>
                                <h2 className="text-white">Yummy & Wow Burger</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="contact-page">
                <Container className="py-5">
                    {/* Header Section */}
                    <motion.h2
                        className="text-center mb-4 title"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        📞 Contact <span className="text-danger">Us</span>
                    </motion.h2>
{/* contact__*/}
                    <Row className="align-items-center">
                        {/* Contact Info */}
                        <Col lg={6} className="mb-4">
                            <motion.div
                                className="contact-info p-4 shadow-lg rounded"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h4 className="mb-3">Get in Touch</h4>
                                <p className="text-muted">
                                    Have questions? Feel free to reach out! We're here to serve you the best burgers in town. 🍔
                                </p>

                                <div className="d-flex align-items-center mb-3">
                                    <FaPhone className="icon me-3" />
                                    <p className="m-0">9879590440</p>
                                </div>

                                <div className="d-flex align-items-center mb-3">
                                    <FaEnvelope className="icon me-3" />
                                    <p className="m-0">sadikalikhorajiya20@gmail.com</p>
                                </div>

                                <div className="d-flex align-items-center">
                                    <FaMapMarkerAlt className="icon me-3" />
                                    <p className="m-0">123 Burger Street, Food City, USA</p>
                                </div>
                            </motion.div>
                        </Col>

                        {/* Contact Form */}
                        <Col lg={6}>
                            <motion.div
                                className="contact-form p-4 shadow-lg rounded"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h4 className="mb-3">Send Us a Message</h4>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Your Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter your email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={4} placeholder="Type your message..." />
                                    </Form.Group>

                                    <Button variant="danger" className="w-100">
                                        Send Message 🚀
                                    </Button>
                                </Form>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Contect_us
