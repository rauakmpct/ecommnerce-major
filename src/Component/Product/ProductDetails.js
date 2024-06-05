import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { getAllProductDetail } from '../../Redux/Action/ProductAction';
import { addItemToCart } from '../../Redux/Action/CartAction';

function ProductDetails() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.pdetail)
  console.log(products);

  useEffect(() => {
    dispatch(getAllProductDetail(id))
  }, [dispatch, id])

  const [quantity, setQuantity] = useState(1)
  const increaseQty = () => {
    if (products.stock <= quantity) return
    const qty = quantity + 1
    setQuantity(qty)
  }
  const decreaseQty = () => {
    if (1 >= quantity) return
    const qty = quantity - 1
    setQuantity(qty)
  }
  const addToCardHandler = (() => {
    dispatch (addItemToCart(id,quantity))

  })
  return (

    <>
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <Link className="breadcrumb-item text-dark" href="/">Home</Link>
              <Link className="breadcrumb-item text-dark" href="/">Shop</Link>
              <span className="breadcrumb-item active">Shop Detail</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="container-fluid pb-5">
        <div className="row px-xl-5">
          <div className="col-lg-5 mb-30">
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={products?.image?.url} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-lg-7 h-auto mb-30">
            <div className="h-100 bg-light p-30">
              <h3>{products.name}</h3>
              <div className="d-flex mb-3">
                <div className="text-primary mr-2">
                  <small className="fas fa-star"></small>
                  <small className="fas fa-star"></small>
                  <small className="fas fa-star"></small>
                  <small className="fas fa-star-half-alt"></small>
                  <small className="far fa-star"></small>
                </div>
                <small className="pt-1">(99 Reviews)</small>
              </div>
              <h3 className="font-weight-semi-bold mb-4">Rs.{products.price}</h3>
              <p className="mb-4">{products.description}</p>
              <div className="d-flex align-items-center mb-4 pt-2">
                <div className="input-group quantity mr-3" style={{ width: '130px' }}>
                  <div className="input-group-btn">
                    <button onClick={decreaseQty} className="btn btn-primary btn-minus">
                      <i className="fa fa-minus"></i>
                    </button>
                  </div>
                  <input type="text" className="form-control bg-secondary border-0 text-center" value={quantity} />
                  <div className="input-group-btn">
                    <button onClick={increaseQty} className="btn btn-primary btn-plus">
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
                <Link to='/cart'>
                  <button onClick={addToCardHandler} className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1"></i> Add To
                    Cart</button>
                </Link>
              </div>
              <div className="d-flex pt-2">
                <strong className="text-dark mr-2">Share on:</strong>
                <div className="d-inline-flex">
                  <Link className="text-dark px-2" href="/">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="text-dark px-2" href="/">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="text-dark px-2" href="/">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  <Link className="text-dark px-2" href="/">
                    <i className="fab fa-pinterest"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row px-xl-5">
          <div className="col">
            <div className="bg-light p-3">
              <div className="row flex ">
                <div className="mb-3">
                  <details open>
                    <summary className="mb-3">Description</summary>
                    <p>{products.description}
                    </p>
                  </details>
                </div>
                <div className="mb-0">
                  <details>
                    <summary className="mb-3">Information</summary>
                    <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item px-0 text-body">
                            Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                          </li>
                          <li className="list-group-item px-0 text-body">
                            Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                          </li>
                          <li className="list-group-item px-0 text-body">
                            Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                          </li>
                          <li className="list-group-item px-0 text-body">
                            Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item px-0 text-body">
                            Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                          </li>
                          <li className="list-group-item px-0 text-body">
                            Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                          </li>
                          <li className="list-group-item px-0 text-body">
                            Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                          </li>
                          <li className="list-group-item px-0 text-body">
                            Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default ProductDetails;


