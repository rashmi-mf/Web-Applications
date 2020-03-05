import React from 'react'
import logo from '././img/logo.png';

export default function PageHeader() {
    return (
        <div>
            {/* Header Navigation Section */}
            <header className="header mb-5 pb-4">
                <nav className="navbar navbar-expand-lg bg-white p-3">
                    <img className="navbar-brand nav-link" src={logo} alt="Logo"></img>
                    <button type="button" name="toggler_btn" id="toggler_btn" className="navbar-toggler navbar-light" data-toggle="collapse" data-target="#header-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="header-nav">
                        <ul className="navbar-nav">
                            <li className="nav-item pr-3"><a href="#" className="nav-link text-uppercase text-white login-btn-bg">Login</a></li>
                            <li className="nav-item pr-3"><a href="#" className="nav-link text-body text-uppercase header-font-m">Sign Up</a></li>
                            <li className="nav-item pr-5"><i href="#" className="nav-link text-body three-dot-bg header-font-m"></i></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}
