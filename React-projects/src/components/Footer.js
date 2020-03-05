import React from 'react'
import logo from '././img/logo.png';

export default function Footer() {
    return (
        <div>
            {/* Footer Links Section */}
            <section className="mt-5">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-sm-3 mb-5 pull-left">
                            <img className="footer-logo ml-3" src={logo} alt="logo"></img>
                            <p className="font-size-xs font-weight-light footer-content-list mb-0 ml-3 mt-4 text-black-50">Copyright &copy; 2019 Qrated.</p>
                            <p className="font-size-xs font-weight-light footer-content-list mb-0 ml-3 text-black-50">All rights reserved.</p>
                        </div>
                        <div className="col-sm-7 pull-left">
                            <div className="col-sm-4 mb-5 pull-left">
                                <h3 className="mb-4 text-black-50 font-size-tile-s text-uppercase">About</h3>
                                <p className="mb-2 header-font-m footer-content-list text-black-50 font-weight-bolder">About us</p>
                                <p className="mb-2 header-font-m footer-content-list text-black-50 font-weight-bolder">Team</p>
                                <p className="mb-2 header-font-m footer-content-list text-black-50 font-weight-bolder">Contact us</p>
                            </div>
                            <div className="col-sm-4 mb-5 pull-left">
                                <h3 className="mb-4 text-black-50 font-size-tile-s text-uppercase">Explore</h3>
                                <p className="mb-2 header-font-m footer-content-list text-black-50 font-weight-bolder">Our services</p>
                                <p className="mb-2 header-font-m footer-content-list text-black-50 font-weight-bolder">FAQs</p>
                                <p className="mb-2 header-font-m footer-content-list text-black-50 font-weight-bolder">Offer your services</p>
                            </div>
                            <div className="col-sm-4 mb-5 pull-left">
                                <h3 className="mb-4 text-black-50 font-size-tile-s text-uppercase">Contact</h3>
                                <p className="mb-2 header-font-m footer-content-list text-black-50 font-weight-bolder">Careers</p>
                                <p className="mb-2 header-font-m footer-content-list text-black-50 font-weight-bolder">Meet us</p>
                                <p className="mb-2 header-font-m footer-content-list text-black-50 font-weight-bolder">Customer Service</p>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="col-sm-12">
                            <span className="fa fa-facebook mr-4 pr-1 text-black-50" data-rating="1"></span>
                            <span className="fa fa-twitter mr-4 pr-1 text-black-50" data-rating="1"></span>
                            <span className="fa fa-instagram mr-4 pr-1 text-black-50" data-rating="1"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="mt-0" />
            </section>
            {/* Footer Section */}
            <footer>
                <section className="footer-section-blue">
                        <div className="col-sm-12 pl-5">
                            <p className="font-size-xs font-weight-light footer-content-list mb-0 mb-4 ml-3 ml-4 mt-3 text-black-50">Terms and Conditions | Privacy Policy</p>
                        </div>
                </section>
            </footer>
        </div>
    )
}