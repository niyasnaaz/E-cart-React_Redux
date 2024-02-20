import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../redux/cartSlice';

function AddToCart() {
  const cartArray = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [total,setTotal]=useState(0)

  const getcartTotal = ()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  }
  useEffect(()=>{
    getcartTotal()
  },[cartArray])

  const handleCart=()=>{
    dispatch(emptyCart())
    alert("Your Order Placed Successfully... Thank You For Purchasing.")
    navigate('/')

  }

  return (
    <div style={{ marginTop: '50px',marginBottom:"50px",marginLeft:"50px"}}>
      {cartArray.length > 0 ? (
        <div className="row">
          <div className="col-lg-8">
            <table className='table shadow-lg rounded'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Product Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartArray.map((product, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.title}</td>
                    <td><img width={'150px'} height={'120px'} src={product.thumbnail} alt="" /></td>
                    <td>${product.price}</td>
                    <td><Button onClick={() => dispatch(removeFromCart(product.id))} className='btn btn-light'><i class="fa-solid fs-4 fa-trash text-danger"></i></Button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>

            <div className="col-lg-3 ms-5">
              <div className='border mt-3 rounded shadow p-2 w-100'>
                <h1 className='text-primary p-2'>Cart Summary</h1>
                <h4>Total Products: <span>{cartArray.length}</span></h4>
                <h4>Total: <span className='text-danger fw-bolder fs-2'>${total}</span></h4>
                <div className='d-grid'>
                  <button onClick={handleCart} className='btn btn-success mt-5 fw-bold rounded'>Check Out</button>
                </div>
              </div>
            </div>

          </div>
      ) : <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
      <img height={'500px'} width={'500px'} src="https://thumbs.dreamstime.com/b/tired-buyer-d-human-shopping-cart-34806421.jpg" alt="" />
      <h3 className='text-center text-danger'>Wishlist Is Empty!!</h3>
      <Link style={{ textDecoration: "none" }} className='btn btn-warning fw-bold
     rounded' to={'/'}>Back To Home</Link>
    </div>}
    </div>
  );
}

export default AddToCart;
