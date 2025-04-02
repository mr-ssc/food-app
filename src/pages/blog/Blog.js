import React from 'react'
import Header from '../../components/Layouts/Header'
import Footer from '../../components/Layouts/Footer'
import { Card, Col, Container, Row } from 'react-bootstrap';
import blog_01 from "../../assets/blog/blog_1.png"
import blog_02 from "../../assets/blog/blog_2.png"
import blog_03 from "../../assets/blog/blog_3.png"
import blog_04 from "../../assets/blog/blog-list-1.png"
import blog_05 from "../../assets/blog/blog-list-2.png"
import menu_2 from "../../assets/menu/burger-11.jpg"
import menu_3 from "../../assets/menu/burger-12.jpg"
import menu_4 from "../../assets/menu/burger-13.jpg"
function Blog() {
    const blogs = [
        {
            title: "The Secret Behind Juicy Burgers 🍔",
            date: "March 17, 2025",
            description:
                "Discover the secret techniques to make the juiciest burgers at home! From selecting the best meat to cooking it just right...",
            image: blog_01,
        },
        {
            title: "Top 5 Burger Toppings You Must Try! 🧀🥓",
            date: "March 10, 2025",
            description:
                "Tired of the same old ketchup and mayo? Here are 5 unique burger toppings that will change your burger game forever!",
            image: blog_02,
        },
        {
            title: "How to Make a Perfect Cheeseburger 🏆",
            date: "March 5, 2025",
            description:
                "A step-by-step guide to crafting the ultimate cheeseburger, including cheese selection, bun choices, and grilling tips.",
            image: blog_03,
        },
    ];
    const blog = [
        {
            title: "The Secret Behind Juicy Burgers 🍔",
            date: "March 17, 2025",
            description:
                "Discover the secret techniques to make the juiciest burgers at home! From selecting the best meat to cooking it just right...",
            image: blog_04,
        },

    ];
    const blog2 = [
        {
            title: "The Secret Behind Juicy Burgers 🍔",
            date: "March 17, 2025",
            description:
                "Discover the secret techniques to make the juiciest burgers at home! From selecting the best meat to cooking it just right...",
            image: blog_05,
        },

    ];
    const burgerMenu = [
            {
                name: "CHEESY CHICKEN BURGER",
                price: "$16.00",
                description: "Beef, Eggs, poached, fried, with bacon, chorizo, roasted roma tomatoes.",
                image: menu_2,
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
            
           
        ];

    return (
        <div>
            <Header />
            <section className="hero_section">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="hero_text text-center">
                                <h1 className="text-white">Our Blog</h1>
                                <h2 className="text-white">Yummy & Wow Burger</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Container>

                <Row className='mt-4'>
                    {blog.map((blog, index) => (
                        <Col lg={8} md={6} key={index} className="mb-4">
                            <Card >
                                <Card.Img variant="top" src={blog.image} className="blog-image card-img-top" />
                                <Card.Body>
                                    <Card.Title>{blog.title}</Card.Title>
                                    <Card.Subtitle className="text-muted mb-2">{blog.date}</Card.Subtitle>
                                    <Card.Text>{blog.description}</Card.Text>
                                    <button className="btn btn-danger">Read More</button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    <Col lg={4} md={6}>
                        <div className='mt-5 main-menu-list'>
                            <div className="menu-list mt-5 ">
                                {burgerMenu.map((burger, index) => (
                                    <div key={index} className="d-flex align-items-center mb-4">
                                        <img src={burger.image} alt={burger.name} className="menu-image me-3" />
                                        <div className="flex-grow-1">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h5 className="mb-0 fw-bold">{burger.name}</h5>
                                                <h5 className="text-danger fw-bold">{burger.price}</h5>
                                            </div>
                                            <p className="text-muted mb-1">{burger.description}</p>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>

                <Row className='mt-4'>
                    {blog2.map((blog, index) => (
                        <Col lg={8} md={6} key={index} className="mb-4">
                            <Card >
                                <Card.Img variant="top" src={blog.image} className="blog-image card-img-top" />
                                <Card.Body>
                                    <Card.Title>{blog.title}</Card.Title>
                                    <Card.Subtitle className="text-muted mb-2">{blog.date}</Card.Subtitle>
                                    <Card.Text>{blog.description}</Card.Text>
                                    <button className="btn btn-danger">Read More</button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    <Col lg={4} md={6}>
                        <div className='mt-5 main-menu-list'>
                            <div className="menu-list mt-5 ">
                                {burgerMenu.map((burger, index) => (
                                    <div key={index} className="d-flex align-items-center mb-4">
                                        {/* <img src={burger.image} alt={burger.name} className="menu-image me-3" /> */}
                                        <div className="flex-grow-1">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h5 className="mb-0 fw-bold">{burger.name}</h5>
                                                <h5 className="text-danger fw-bold">{burger.price}</h5>
                                            </div>
                                            <p className="text-muted mb-1">{burger.description}</p>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>

                <Row>
                    {blogs.map((blog, index) => (
                        <Col lg={4} md={6} key={index} className="mb-4">
                            <Card className="shadow-sm">
                                <Card.Img variant="top" src={blog.image} className="blog-image card-img-top" />
                                <Card.Body>
                                    <Card.Title>{blog.title}</Card.Title>
                                    <Card.Subtitle className="text-muted mb-2">{blog.date}</Card.Subtitle>
                                    <Card.Text>{blog.description}</Card.Text>
                                    <button className="btn btn-danger">Read More</button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Blog
