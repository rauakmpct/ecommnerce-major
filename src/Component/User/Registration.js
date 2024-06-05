import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearErrors, createUser } from '../../Redux/Action/UserAction'
import MetaData from '../layoutes/MetaData'


function Registration() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isAuthenticated, error } = useSelector(
        (state) => state.auth
    )

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmpassword, setCpassword] = useState()
    const [image, setImage] = useState()
    const submitHandle = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('name', name)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('confirmpassword', confirmpassword)
        formData.append('image', image)
        dispatch(createUser(formData))
    }
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/login')
        }
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
    }, [error, alert, dispatch, isAuthenticated, navigate])
    return (
        <>
            <MetaData title="Registration | Ecommerce" />

            <div className='container'>
                <div className='row font'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4 border border-5 border-warning rounded'>
                        <h2 className='text-center mb-5 mt-5'>Registration Form</h2>
                        <form onSubmit={submitHandle}>
                            <div className='form-group mb-3'>
                                <label htmlFor="">Name</label>
                                <input name='name' type="text" placeholder='Enter Name' className='form-control' onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div className='form-group mb-3'>
                                <label htmlFor="">Email</label>
                                <input name='email' type="email" placeholder='Enter Email' className='form-control' onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className='form-group mb-3'>
                                <label htmlFor="">Password</label>
                                <input name='password' type="password" placeholder='Enter Password' className='form-control' onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <div className='form-group mb-3'>
                                <label htmlFor="">Confirm Password</label>
                                <input name='confirmpassword' type="password" placeholder='Confirm Password' className='form-control' onChange={(e) => setCpassword(e.target.value)} required />
                            </div>
                            <div className='form-group mb-5'>
                                <label htmlFor="">Upload Image</label>
                                <input type="file" name='image' className='form-control' onChange={(e) => setImage(e.target.files[0])} />
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-warning ani' type='submit'>Submit</button>
                            </div>
                            <br />
                        </form>
                    </div>
                    <div className='col-md-4'></div>
                </div>

            </div>
        </>
    )
}

export default Registration;