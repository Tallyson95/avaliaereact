import React from "react"
import '../css/bootstrap.min.css'
import '../css/style.css'
import '../css/responsive.css'
import '../css/jquery.mCustomScrollbar.min.css'
import '../css/font-awesome.css'
import '../css/font-awesome.min.css'
import '../css/teste.css'
import about_img from '../assets/about_img.png'
import about_right from '../assets/about_right.jpg'


export function Sobre() {
    return (
        <div id="about" class="about">
            <div class="container">
                <div class="row ">
                    <div class="col-md-5">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="titlepage">
                                    <h2 class="avaliae">SOBRE</h2>
                                    <p class="descAvaliae"> Seus produtos podem ser avaliados por consumidores de diversas lojas de diferentes lugares.
                                        Assim, você terá acesso a dados sobre uma real avaliação do produto, independente da loja
                                        onde foi comprado.</p>
                                </div><br/>
                            </div>
                            <div class="col-md-12">
                                <div class="about_img">
                                    <figure><img src={about_img} alt="#" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="about_right">
                            <figure><img src={about_right} alt="#" /></figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}