import React from "react"
import '../css/bootstrap.min.css'
import '../css/style.css'
import '../css/responsive.css'
import '../css/jquery.mCustomScrollbar.min.css'
import '../css/font-awesome.css'
import '../css/font-awesome.min.css'
import '../css/teste.css'

export function Contato() {
    return (
        <div id="contact" class="contact">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="titlepage">
                            <h2 class="servico">ENTRE EM CONTATO CONOSCO</h2>
                            <p>Entre em contato conosco caso tenha dúvidas sobre nosso serviço ou caso queira saber mais sobre nós.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="con_bg">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6">
                            <form id="request" class="main_form">
                                <div class="row">
                                    <div class="col-md-12 ">
                                        <input class="contactus" placeholder="Nome" type="type" name="Name" />
                                    </div>
                                    <div class="col-md-12">
                                        <input class="contactus" placeholder="Email" type="type" name="Email" />
                                    </div>
                                    <div class="col-md-12">
                                        <input class="contactus" placeholder="Celular" type="type" name="Phone Number" />
                                    </div>
                                    <div class="col-md-12">
                                        <input class="contactusmess" placeholder="Mensagem" type="type" Message="Name" />
                                    </div>
                                    <div class="col-md-12">
                                        <button class="send_btn">Enviar</button>
                                    </div>
                                    <div class="col-md-12">
                                        <ul class="location_form">
                                            <li><a href="#"><i class="fa fa-phone" aria-hidden="true"></i></a>
                                                (21) 9-1234-5678 (21) 9-1234-5678
                                            </li>
                                            <li><a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a>contato@avaliae.com.br</li>
                                        </ul>
                                    </div>
                                    <div class="col-md-12">
                                        <ul class="social_icon">
                                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-6 padding_right2">
                            <div class="map_section">
                                <div id="map">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}