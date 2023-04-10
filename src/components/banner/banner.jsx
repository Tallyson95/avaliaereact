import React from "react"
import '../css/bootstrap.min.css'
import '../css/style.css'
import '../css/responsive.css'
import '../css/jquery.mCustomScrollbar.min.css'
import '../css/font-awesome.css'
import '../css/font-awesome.min.css'
import '../css/teste.css'
import banner from '../assets/starss.png'
import '../banner/banner.css'

export function Banner() {
    return (
        <section class="banner_main" style={{ backgroundImage: `url(${banner})` }}>
            <div id="banner1" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#banner1" data-slide-to="0" class="active"></li>
                    <li data-target="#banner1" data-slide-to="1"></li>
                    <li data-target="#banner1" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="container">
                            <div class="carousel-caption">
                                <div class="text-bg">
                                    <h1 class="avaliae">AvaliAê</h1>
                                    <a class="read_more" href="#about">Saiba Mais</a>
                                    <ul class="social_team">
                                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}