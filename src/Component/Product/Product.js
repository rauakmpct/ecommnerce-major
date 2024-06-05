import React from 'react';
import { Link } from 'react-router-dom';


function Product({ product }) {
    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <Link className="text-decoration-none" to="/">
                    <div className="cat-item d-flex align-items-center mb-4" >
                        <div className="overflow-hidden " >
                            <Link to={`/product/${product._id}`}>
                            <img className="img-fluid " src={product.image.url} alt="" />
                            </Link>
                        </div>
                        <div class="text-center py-4">
                            <Link className="h6 text-decoration-none text-truncate" to={`/product/${product._id}`}>{product.name}</Link>
                            <div className="d-flex align-items-center justify-content-center mt-2">
                                <h5>Rs.{product.price}</h5>
                                {/* <h6 class="text-muted ml-2"><del>$123.00</del></h6> */}
                            </div>
                            <div className="d-flex align-items-center justify-content-center mb-1">
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small>(99)</small>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Product;