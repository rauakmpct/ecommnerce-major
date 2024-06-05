import React from 'react'
import { Link } from 'react-router-dom'
import Loading from '../layoutes/Loader'
import MetaData from '../layoutes/MetaData'
import { useSelector } from 'react-redux'



function Profile() {
    const { user, loading } = useSelector(
        (state) => state.auth
    )
  return (
    <>
    {loading ? (
        <Loading />
    ) : (
        <>
            {/* breadcrumb starts */}
            <MetaData title="Profile | Ecommerce" />

            <div className="container container-fluid">
                <h2 className="mt-5 ml-5">My Profile</h2>
                <div className="row justify-content-around mt-5 user-info">
                    <div className="col-12 col-md-3">
                        <figure className='avatar avatar-profile'>
                            <img className="rounded-circle img-fluid" src={user?.image?.url} alt='' />
                        </figure>
                        <Link to="/updateProfile" id="edit_profile" className="btn btn-primary btn-block my-5">
                            Edit Profile
                        </Link>
                    </div>

                    <div className="col-12 col-md-5">
                        <h4>Full Name</h4>
                        <p>{user.name}</p>

                        <h4>Email Address</h4>
                        <p>{user.email}</p>

                        <a href="/orders" className="btn btn-danger btn-block mt-5">
                            My Orders
                        </a>

                        <Link to="/updatepassword" className="btn btn-primary btn-block mt-3">
                            Change Password
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )}
</>
  )
}

export default Profile