import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsSearch } from "react-icons/bs"

// importing images
import compare from "../images/compare.svg"
import wishlist from "../images/wishlist.svg"
import user from "../images/user.svg"
import cart from "../images/cart.svg"
import menu from "../images/menu.svg"





const Header = () => {
  return (
    <>
      {/* Header Top Strip code Start */}
      <header className='header-top-strip py-3 '>
        <div className='container-1640'>
          <div className="row">
            <div className="col-6">
              <p className='text-white mb-0  '>Free Shipping over ₹499 & Free Returns</p>
            </div>
            <div className="col-6">
              <p className='text-end text-white mb-0  '>Hotline: <a className='text-white' href="tel:+91 8447767283">+91 8447767283</a></p>
            </div>
          </div>
        </div>
      </header>
      {/* Header Top Strip code End Here */}


      {/* Header Upper part code Start */}
      <header className='header-upper py-3 '>
        <div className='container-1640'>
          <div className="row align-items-center justify-content-between">
            <div className="col-1">
              <h2><Link to={"/"} className='text-white'>On4All</Link></h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input type="text" className="form-control py-2 " placeholder="Search Your Products Here..." aria-label="Search Your Products Here..." aria-describedby="basic-addon2" />
                <span className="input-group-text p-3 " id="basic-addon2"><BsSearch className='fs-6' /></span>
              </div>
            </div>
            <div className="col-4">
              <div className="header-upper-links d-flex align-items-center justify-content-between ">
                <div>
                  <Link to={"/compare-products"} className='d-flex align-items-center gap-10 text-white '>
                    <img src={compare} alt="compare" />
                    <p className='mb-0'>Compare <br /> Products</p>
                  </Link>
                </div>
                <div>
                  <Link to={"/wishlist"} className='d-flex align-items-center gap-10 text-white '>
                    <img src={wishlist} alt="wishlist" />
                    <p className='mb-0'>Favourite  <br /> Wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link to={"/login"} className='d-flex align-items-center gap-10 text-white '>
                    <img src={user} alt="My Account" />
                    <p className='mb-0'>Log in  <br /> My Account</p>
                  </Link>
                </div>
                <div>
                  <Link to={"/cart"} className='d-flex align-items-center gap-10 text-white '>
                    <img src={cart} alt="cart" />
                    <div className='d-flex flex-column gap-10'>
                      <span className='badge bg-white text-dark badge-w'>0</span>
                      <p className='mb-0'>₹499</p>
                    </div>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header Upper part code End Here */}


      {/* Header Bottom part code Start */}
      <header className='header-bottom py-3 '>
        <div className="container-1640">
          <div className="row">
            <div className="col-12">
              <div className="menu-botton d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src={menu} alt="menu" />
                      <span className='me-5 d-inline-block '>Shop Categories</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="dropdown-item text-white " to="">Action</Link></li>
                      <li><Link className="dropdown-item text-white " to="">Another action</Link></li>
                      <li><Link className="dropdown-item text-white " to="">Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/store">Our Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header Bottom part code End Here */}

    </>
  )
}

export default Header
