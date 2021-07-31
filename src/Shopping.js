import React from 'react'
import './Shopping.css'

export default function Shopping() {
    return (
        <>
            <div className="backgoundall">
                <div className="smaller">
                <div className="heading">
                    <h1 className="text-center my-5">Shopping Mark</h1>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                       <h3 className="text-center">Items</h3>
                                </div>  

                                <div className="col-lg-6 col-md-6 col-12">
                                <form class="d-flex">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                                </form>
                                </div>
                            </div>

                            {/* card */}
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                    <img src="https://wallpapercave.com/wp/wp9454975.jpg" class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Doants</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <button type="button" class="btn btn-primary">+</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            {/* card */}
                    </div>

                    <div className="col-lg-6 col-md-6 col-12">
                            <div className="cart">
                                 <h1>Cart</h1>
                            </div>

                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                    <img src="https://wallpapercave.com/wp/wp9454975.jpg" class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Doants</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <button type="button" class="btn btn-primary">-</button>
                                        <input type="text" className="inputing" value="0"/>
                                        <button type="button" class="btn btn-primary">+</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
