import React from "react"
import './footer.css'
import '../css/bootstrap.min.css'
import '../css/style.css'
import '../css/responsive.css'
import '../css/jquery.mCustomScrollbar.min.css'
import '../css/font-awesome.css'
import '../css/font-awesome.min.css'
import '../css/teste.css'


export function Footer() {
    return (
        <div>
            <footer>
                <div class="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <h3>ACESSO RÁPIDO</h3>
                                <br />
                                <p>
                                    <a class='k' href="/">Início</a>
                                    <br />
                                    <a class="k" href="login">Login</a>
                                    <br />
                                    <a class="k" href="#contact">Contato</a>
                                    <br />
                                    <a class="k" href="#team">Nossa Equipe</a>
                                    <br />
                                    <a class="k" href="#we_Do">Nosso Serviço</a>
                                </p>
                            </div>
                            <div class="col-md-4">
                                <div class="fid_box">
                                    <h3>ENTRE EM CONTATO CONOSCO</h3>
                                    <ul class="location_icon">
                                        <li><a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i></a><br />Rua Barcelo Domingos, 58<br />Campo Grande - RJ</li>
                                        <li><a href="#"><i class="fa fa-phone" aria-hidden="true"></i></a><br />(21) 9-1234-5678<br /> (21) 9-1234-5678</li>
                                        <li><a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a><br />contato@avaliae.com.br</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="fid_box">
                                    <h3>RECEBA NOVIDADES POR EMAIL:</h3>
                                    <form class="news_form">
                                        <input class="letter_form" placeholder=" Email" type="text" name="Email" />
                                        <button class="sumbit">Inscrever-se</button>
                                    </form>
                                    <ul class="social_icon">
                                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="copyright">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <p>© 2022 TODOS OS DIREITOS RESERVADOS.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}