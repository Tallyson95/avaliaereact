import React from "react"
import '../css/bootstrap.min.css'
import '../css/style.css'
import '../css/responsive.css'
import '../css/jquery.mCustomScrollbar.min.css'
import '../css/font-awesome.css'
import '../css/font-awesome.min.css'
import '../css/teste.css'
import menuicon from '../assets/menu_icon.png'
import logo from '../assets/logo.png'

export default function Mainav() {
    return (
        <header>
            <div class="header">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <div class="sea_icon d_none ">
                                <a href="/login">LOGIN</a>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col logo_section">
                            <div class="full">
                                <div class="center-desk">
                                    <div class="logo">
                                        <a href="/">
                                            <img src={logo}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <div class="right_bottun">
                                <button class="openbtn" onclick="openNav()"><img src={menuicon} alt="#" /> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}