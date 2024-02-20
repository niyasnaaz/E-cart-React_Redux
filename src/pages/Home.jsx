import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch';
import { addToWishlist } from '../redux/wishlistslice';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function Home() {

  const data = useFetch("https://dummyjson.com/products")
  console.log(data);
  const dispatch = useDispatch()

  return (
    <Row className='ms-5' style={{ marginTop: "100px" }}>
      {data?.length > 0 ? data?.map((product, index) => (
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
                <Button onClick={()=>dispatch(addToWishlist(product))} className='btn btn-light' ><i class="fa-solid fs-4 fa-heart text-danger"></i></Button>
                <Button onClick={()=>dispatch(addToCart(product))} className='btn btn-light'><i class="fa-solid fs-4 fa-cart-shopping text-dark"></i></Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      )) : <p className='text-danger fw-bolder'>Nothing To Display</p>}
    </Row>
  )
}

export default Home