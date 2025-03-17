import React from 'react'
import Header from '../../components/Layouts/Header'
import Footer from '../../components/Layouts/Footer'
import { Container, Row, Col } from "react-bootstrap";
import burgger_king from "../../assets/hero/burggerking.png";
import master_chef from "../../assets/promotion/master_chef.png";
import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <Header />
            <section className="hero_section">
                <Container>
                    <Row>
                        <Col lg={7} className="mb-5 mb-lg-0">
                            <div className="position-relative">
                                <img src={burgger_king} className="" alt="Hero" />
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="hero_text text-center">
                                <h1 className="text-white">Earn
                                    Crowns.</h1>
                                <h2 className="text-white">Redeem
                                    Rewards.</h2>
                                <Link to="/" className="btn order_now">
                                    Order Now
                                </Link>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
            <section className="promotion_section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="text-center mb-5 mb-lg-0">
                            <img src={master_chef} className="img-fluid" alt="Promotion" />
                        </Col>
                        <Col lg={6} className="px-5">
                        
                            <h2>a master chef with 25 years of experience</h2>
                            <p>
                                
                            Welcome to<strong> Tasty Burger</strong> where we turn every bite into a masterpiece! Founded with a passion for crafting the juiciest, most flavorful burgers, we believe in using fresh, high-quality ingredients to bring you the ultimate burger experience.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
          


            <Footer />
        </>
    )
}

export default About
