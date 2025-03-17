import React from 'react'
import Header from '../../components/Layouts/Header'
import Footer from '../../components/Layouts/Footer'
import { Container, Row, Col } from "react-bootstrap";
import menu_01 from "../../assets/menu/menu_1.png";
import menu_02 from "../../assets/menu/menu_2.png";
import menu_03 from "../../assets/menu/menu_3.png";
import menu_2 from "../../assets/menu/burger-11.jpg"
import menu_3 from "../../assets/menu/burger-12.jpg"
import menu_4 from "../../assets/menu/burger-13.jpg"
import menu_5 from "../../assets/menu/burger-14.jpg"
import pasta_1 from "../../assets/menu/pasta_1.png"
import pasta_2 from "../../assets/menu/pasta_2.png"
import pasta_3 from "../../assets/menu/pasta_3.png"
import pasta_4 from "../../assets/menu/pasta_4.png"
import crem_01 from "../../assets/menu/ds1.png"
import crem_02 from "../../assets/menu/ds2.png"
import crem_03 from "../../assets/menu/ds3.png"
import crem_04 from "../../assets/menu/ds4.png"

import { Link } from 'react-router-dom';

function Menu() {
    const burgerMenu = [
        {
            name: "CHEESY CHICKEN BURGER",
            price: "$16.00",
            description: "Beef, Eggs, poached, fried, with bacon, chorizo, roasted roma tomatoes.",
            image: menu_2, // Replace with actual image URL
            isNew: true,
        },
        {
            name: "MAXI BURGER",
            price: "$25.00",
            description: "Sliced beef in a large bowl. Whisk together lemon juice, soy sauce.",
            image: menu_3,
            isNew: false,
        },
        {
            name: "DOUBLE BURGER",
            price: "$22.00",
            description: "Galjoen fish Australian lungfish sea, Shad angler arapaima pencilsmelt.",
            image: menu_4,
            isNew: false,
        },
        {
            name: "TRIPLE LAYER BURGER",
            price: "$18.00",
            description: "Beef, Eggs, poached, fried, with bacon, chorizo, mushrooms & spinach.",
            image: menu_5,
            isNew: false,
        },
        {
            name: "TRIPLE LAYER BURGER",
            price: "$18.00",
            description: "Beef, Eggs, poached, fried, with bacon, chorizo, mushrooms & spinach.",
            image: menu_5,
            isNew: false,
        },
        {
            name: "TRIPLE LAYER BURGER",
            price: "$18.00",
            description: "Beef, Eggs, poached, fried, with bacon, chorizo, mushrooms & spinach.",
            image: menu_5,
            isNew: false,
        },
        {
            name: "TRIPLE LAYER BURGER",
            price: "$18.00",
            description: "Beef, Eggs, poached, fried, with bacon, chorizo, mushrooms & spinach.",
            image: menu_5,
            isNew: false,
        },
        {
            name: "TRIPLE LAYER BURGER",
            price: "$18.00",
            description: "Beef, Eggs, poached, fried, with bacon, chorizo, mushrooms & spinach.",
            image: menu_5,
            isNew: false,
        },
    ];
    const pasta = [
        {
            name: "Beef steak grill pan",
            price: "$16.00",
            description: "Beef, Eggs, poached, fried, with bacon, chorizo, roasted roma tomatoes.",
            image: pasta_1, // Replace with actual image URL
            isNew: true,
        },
        {
            name: "raw marbled meat steak",
            price: "$25.00",
            description: "Siced beef in a large bowl. Whisk together lemon juice, soy sauce.",
            image: pasta_2,
            isNew: false,
        },
        {
            name: "Medium beef steak grill pan",
            price: "$22.00",
            description: "Galjoen fish Australian lungfish sea, Shad angler arapaima pencilsmelt.",
            image: pasta_3,
            isNew: false,
        },
        {
            name: "Beef steak grill pan",
            price: "$18.00",
            description: "Beef, Eggs, poached, fried, with bacon, chorizo, roasted roma tomatoes. , mushrooms & spinach",
            image: pasta_4,
            isNew: false,
        },

    ];
    const crem = [
        {
            name: "Beef steak grill pan",
            price: "$16.00",
            description: "Beef, Eggs, poached, fried, with bacon, chorizo, roasted roma tomatoes.",
            image: crem_01, // Replace with actual image URL
            isNew: true,
        },
        {
            name: "raw marbled meat steak",
            price: "$25.00",
            description: "Siced beef in a large bowl. Whisk together lemon juice, soy sauce.",
            image: crem_02,
            isNew: false,
        },
        {
            name: "Medium beef steak grill pan",
            price: "$22.00",
            description: "Galjoen fish Australian lungfish sea, Shad angler arapaima pencilsmelt.",
            image: crem_03,
            isNew: false,
        },
        {
            name: "Beef steak grill pan",
            price: "$18.00",
            description: "Beef, Eggs, poached, fried, with bacon, chorizo, roasted roma tomatoes. , mushrooms & spinach",
            image: crem_04,
            isNew: false,
        },
        {
            name: "Beef steak grill pan",
            price: "$18.00",
            description: "Beef, Eggs, poached, fried, with bacon, chorizo, roasted roma tomatoes. , mushrooms & spinach",
            image: crem_04,
            isNew: false,
        },

    ];
    return (
        <>
            <Header />
            <section className="hero_section">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="hero_text text-center">
                                <h1 className="text-white">Our Menu</h1>
                                <h2 className="text-white">Yummy & Wow Burger</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="">
                <Container>
                    <Row>
                        <Col lg={6} className="mb-5 mb-lg-0">
                            <div className="position-relative">
                                <img src={menu_01} className="img-fluid" alt="Hero" />
                            </div>
                        </Col>
                        <Col lg={6} >
                            <div className='mt-5 main-menu-list'>
                                <div className="menu-list mt-5 ">
                                    {burgerMenu.map((burger, index) => (
                                        <div key={index} className="d-flex align-items-center mb-4">
                                            <img src={burger.image} alt={burger.name} className="menu-image me-3" />
                                            <div className="flex-grow-1">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h5 className="mb-0 fw-bold">{burger.name}</h5>
                                                    {burger.isNew && <span className="badge bg-danger">NEW</span>}
                                                    <h5 className="text-danger fw-bold">{burger.price}</h5>
                                                </div>
                                                <p className="text-muted mb-1">{burger.description}</p>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='mt-5'>
                                <Link to="/" className="btn order_now btn_red">
                                    Order Now
                                </Link>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
            {/* second section in menu start */}
            <section className="menu-second mt-5">
                <Container>
                    <div className='menu-main-text mb-5'>
                        <h6>Healthy & Tasty</h6>
                        <h1>PASTA & SALADS</h1>
                    </div>
                    <Row>
                        <Col lg={6} >
                            <div className='mt-5 main-menu-list'>
                                <div className="menu-list mt-5 ">
                                    {pasta.map((pasta, index) => (
                                        <div key={index} className="d-flex align-items-center mb-4">
                                            <img src={pasta.image} alt={pasta.name} className="menu-image me-3" />
                                            <div className="flex-grow-1">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h5 className="mb-0 fw-bold">{pasta.name}</h5>
                                                    {pasta.isNew && <span className="badge bg-danger">NEW</span>}
                                                    <h5 className="text-danger fw-bold">{pasta.price}</h5>
                                                </div>
                                                <p className="text-muted mb-1">{pasta.description}</p>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='mt-5'>
                                <Link to="/" className="btn order_now btn_red">
                                    Order Now
                                </Link>
                            </div>
                        </Col>
                        <Col lg={6} className="mb-5 mb-lg-0">
                            <div className="position-relative">
                                <img src={menu_02} className="img-fluid" alt="Hero" />
                            </div>
                        </Col>

                    </Row>

                </Container>
            </section>
            {/* second section in menu end */}

            {/* three section in menu start */}
            <section className="">
                <Container>
                    <div className='menu-main-text mt-5 mb-3'>
                        <h6>Yummy & Wow</h6>
                        <h1>APPETIZERS & SIDES</h1>
                    </div>
                    <Row>
                        <Col lg={6} className="mb-5 mb-lg-0">
                            <div className="position-relative">
                                <img src={menu_03} className="img-fluid" alt="Hero" />
                            </div>
                        </Col>
                        <Col lg={6} >
                            <div className='mt-5 main-menu-list'>
                                <div className="menu-list mt-5 ">
                                    {crem.map((crem, index) => (
                                        <div key={index} className="d-flex align-items-center mb-4">
                                            <img src={crem.image} alt={crem.name} className="menu-image me-3" />
                                            <div className="flex-grow-1">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h5 className="mb-0 fw-bold">{crem.name}</h5>
                                                    {crem.isNew && <span className="badge bg-danger">NEW</span>}
                                                    <h5 className="text-danger fw-bold">{crem.price}</h5>
                                                </div>
                                                <p className="text-muted mb-1">{crem.description}</p>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='mt-5'>
                                <Link to="/" className="btn order_now btn_red">
                                    Order Now
                                </Link>
                            </div>
                        </Col>

                    </Row>

                </Container>
            </section>
            {/* three section in menu end */}
            <Footer />
        </>
    )
}

export default Menu
