import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { clearErrors, userLogin } from '../../Redux/Action/UserAction'
import MetaData from '../layoutes/MetaData'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const alert = useAlert()


    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const { isAuthenticated, error,} = useSelector(state => state.auth)
    const submitHandel = (e) => {
        e.preventDefault()
        console.log(email + password);
        dispatch(userLogin(email, password))
    }

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors)
        }
        if (isAuthenticated) {
            navigate('/')
        }

    }, [error, alert, dispatch, isAuthenticated, navigate])
    return (
        <>
            <MetaData title="Login | Ecommerce" />

          <div className='container'>
            <div className='row font'>
                <div className='col-md-4'></div>
                <div className='col-md-4 pt-4 pb-5 border border-5 border-warning rounded'>
                    <h2 className='mb-3 text-center'>Login Form</h2>
                    <form onSubmit={submitHandel}>
                        <div className='form-group mb-3'>
                            <label htmlFor="">Email</label>
                            <input name='email' type="text" placeholder='Enter Email' required className='form-control' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='form-group mb-5'>
                            <label htmlFor="">Password</label>
                            <input name='password' type="password" placeholder='Enter Password' required className='form-control' onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='text-center'>
                            <button className='btn btn-warning ani' type='submit'>Submit</button>
                            <br />
                            <Link to='/register'>Not a registered user click here</Link>
                        </div>

                    </form>
                </div>
                <div className='col-md-4'></div>
            </div>
        </div>

        </>
    )
}

export default Login