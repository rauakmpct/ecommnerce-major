import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CheckoutStep from './CheckoutStep'
import './Shipping.css'
import { saveShippingInfo } from '../../Redux/Action/CartAction'
import MetaData from '../layoutes/MetaData'


function Shipping() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { shippingInfo } = useSelector(state => state.cart)
    console.log(shippingInfo)
    const [name, setname] = useState(shippingInfo.name)
    const [address, setAddress] = useState(shippingInfo.address)
    const [city, setcity] = useState(shippingInfo.city)
    const [postalcode, setPostalCode] = useState(shippingInfo.postalcode)
    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo)
    const [country, setCountry] = useState(shippingInfo.country)

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingInfo({name,address,city,postalcode,phoneNo,country}))
        navigate('/order/confirm')

    }
    return (
        <>
            <MetaData title="Shipping | Ecommerce" />

            <CheckoutStep shipping />
            <div class="row wrapper">
                <div class="col-10 col-lg-5">
                    <form class="shadow-lg" onSubmit={submitHandler}>
                        <h1 class="mb-4">Shipping Info</h1>
                        <div class="form-group">
                            <label >Name</label>
                            <input
                                type="text"
                                id="name_field "
                                class="form-control"
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                                required
                            />
                        </div>

                        <div class="form-group">
                            <label >Address</label>
                            <input
                                type="text"
                                id="address_field"
                                class="form-control"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>

                        <div class="form-group">
                            <label >City</label>
                            <input
                                type="text"
                                id="city_field"
                                class="form-control"
                                value={city}
                                onChange={(e) => setcity(e.target.value)}
                                required
                            />
                        </div>

                        <div class="form-group">
                            <label >Phone No</label>
                            <input
                                type="phone"
                                id="phone_field"
                                class="form-control"
                                value={phoneNo}
                                onChange={(e) => setPhoneNo(e.target.value)}
                                required
                            />
                        </div>

                        <div class="form-group">
                            <label>Postal Code</label>
                            <input
                                type="number"
                                id="postal_code_field"
                                class="form-control"
                                value={postalcode}
                                onChange={(e) => setPostalCode(e.target.value)}
                                required
                            />
                        </div>

                        <div class="form-group">
                            <label >Country</label>
                            <select
                                id="country_field"
                                class="form-control"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required
                            >
                                <option>
                                    seletc country
                                </option>
                                <option value='IN'>
                                    india
                                </option>


                            </select>
                        </div>

                        <button
                            id="shipping_btn"
                            type="submit"
                            class="btn btn-block py-3"
                        >
                            CONTINUE
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Shipping