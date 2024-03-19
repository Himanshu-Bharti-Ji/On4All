import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';


// importing images

import wish from "../images/wish.svg"
import boat_headphone from "../images/boat-headphone.jpg"
import prodcompare from "../images/prodcompare.svg"
import view from "../images/view.svg"
import add_cart from "../images/add-cart.svg"


function ProductCard(props) {
    const {grid} = props;
    let location = useLocation();
    return (
        <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-2"}`}>
            <Link to={`${location.pathname === "/" ? "store/product/:id" : location.pathname === "store" ? "" : "product/:id"}`} className="product-card position-relative ">
                <div className="wishlist-icon position-absolute ">
                    <button className='border-0 bg-transparent '>
                    <img src={wish} alt="wish image" />
                    </button>
                </div>
                <div className="product-image ">
                    <img className='img-fluid ' src={boat_headphone} alt="product image" />  
                </div>
                <div className="product-details">
                    <h6 className="brand">boAt</h6>
                    <h5 className="product-title">
                    boAt Rockerz 450R Bluetooth Headphone with 40mm premium drivers
                    </h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className={`description ${grid === 12 ? "d-block": "d-none"}`}>
                    With a great microphone and extra-base, boAt Rockerz 450 Bluetooth Headphone with 40mm premium drivers, Easy Operational Controls, and HD Immersive Audio (Aqua Blue) comes in the front line when a person needs headphones. A wireless headphone lover will basically love it and it can give its user great performance for gaming and listing issues. With Up To 8 hours of audio excellence, It provides a great opportunity for an Adaptive ear cup and headband.
                    </p>
                    <p className="price">₹2,799</p>
                </div>
                <div className="action-bar position-absolute ">
                    <div className="d-flex flex-column gap-15">
                        <button className='border-0 bg-transparent '>
                        <img src={prodcompare} alt="prodcompare" />
                        </button>
                        <button className='border-0 bg-transparent '>
                        <img src={view} alt="view" />
                        </button>
                        <button className='border-0 bg-transparent '>
                        <img src={add_cart} alt="add cart" />
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard
