import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/wishlistslice'
import { addToCart } from '../redux/cartSlice'


function Wishlist() {
  const wishlistArray = useSelector((state) => state.wishlistReducer)
  const dispatch = useDispatch()

  const handleCartWishlist = (product) => {
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  }

  return (
    <div style={{ marginTop: "100px" }}>
      <Row className='ms-5' style={{ marginTop: "100px" }}>
        {wishlistArray.length > 0 ? wishlistArray?.map((product, index) => (
          <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card className='shadow rounded' style={{ width: '20rem', height: "30rem" }}>
              <Card.Img height={"200px"} variant="top" src={product?.thumbnail} />
              <Card.Body>
                <Card.Title>{product?.title}</Card.Title>
                <Card.Text>
                  <p>{product?.description.slice(0, 50)}...</p>
                  <h5>${product?.price}</h5>


                </Card.Text>
                <div className='d-flex justify-content-between'>
                  <Button onClick={() => dispatch(removeFromWishlist(product.id))} className='btn btn-light' ><i class="fa-solid fs-4 fa-trash text-danger"></i></Button>
                  <Button onClick={() => handleCartWishlist(product)} className='btn btn-light' ><i class="fa-solid fs-4 fa-cart-shopping text-dark"></i></Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        )) : <div className='w-100 d-flex mb-5 flex-column justify-content-center align-items-center'>
          <img height={'500px'} width={'500px'} src="https://thumbs.dreamstime.com/b/tired-buyer-d-human-shopping-cart-34806421.jpg" alt="" />
          <h3 className='text-center text-danger'>Wishlist Is Empty!!</h3>
          <Link style={{ textDecoration: "none" }} className='btn btn-warning fw-bold
         rounded' to={'/'}>Back To Home</Link>
        </div>}
      </Row>
    </div>
  )
}

export default Wishlist