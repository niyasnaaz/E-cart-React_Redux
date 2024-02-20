import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Badge } from 'react-bootstrap';
import {useSelector } from 'react-redux';

function Header() {

    const wishlist = useSelector((state)=>state.wishlistReducer)
    const cart = useSelector((state)=>state.cartReducer)

    return (
        <div>
            <Navbar style={{ zIndex: "1" }} collapseOnSelect expand="lg" className="bg-primary">
                <Container>
                    <Navbar.Brand >
                        <Link to={'/'} style={{ textDecoration: 'none', fontSize: '30px' }}>
                            <span className='text-secondary'><i class="fa-solid fa-cart-shopping text-warning"></i></span>
                            <span className='ms-2 fw-bold text-light'> E-Cart <Badge className='rounded ms-2 bg-success'></Badge></span>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link  >
                                <Link to={'/wishlist'} className='d-flex align-items-center text-light' style={{fontWeight: 'bold', textDecoration: 'none', fontSize: "17px" }}>
                                    <i class="fa-solid fa-heart fa-beat-fade fs-5" style={{ color: 'red' }}></i> Wishlist
                                    <Badge className='rounded ms-2 bg-success'>{wishlist.length}</Badge>
                                </Link></Nav.Link>
                            <Nav.Link>

                                <Link to={'/cart'} style={{color:"white", fontWeight: 'bold', textDecoration: 'none', fontSize: "17px" }}>
                                    <i class="fa-solid fa-cart-plus fa-bounce fs-5 text-warning" style={{ color: 'blueviolet' }}></i> Cart
                                    <Badge className='rounded ms-2 bg-success'>{cart.length}</Badge></Link>
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    )
}

export default Header