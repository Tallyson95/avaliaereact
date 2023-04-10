

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
import banner from '../assets/starss.png'
import about_img from '../assets/about_img.png'
import about_right from '../assets/about_right.jpg'
import software_img from '../assets/software_img.jpg'
import alessandra from '../assets/alessandra.jpeg'
import guilherme from '../assets/guilherme.png'
import matheus from '../assets/matheus.jpeg'
import thamires from '../assets/thamires.jpeg'
import tallyson from '../assets/tallyson.jpeg'
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div>
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
                                    </div><br />
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
            <div class="software">
                <div class="container-fluid">
                    <div class="row d_flex">
                        <div class="col-md-6">
                            <div class="titlepage">
                                <h2 class="avaliae">AvaliAê!</h2>
                                <p class="descAvaliae">Comprou um produto ou contratou um serviço recentemente e deseja avaliá-lo em nossa plataforma para que a empresa melhore a sua experiência no futuro? Clique no botão abaixo para se inscrever na lista de espera e desfrutar do nosso serviço quando estiver pronto.</p>
                                <Link to="/login" class="read_more">Avalie Agora!</Link>
                            </div>
                        </div>
                        <div class="col-md-6 padding_right2">
                            <div class="software_img">
                                <figure><img src={software_img} alt="#" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="we_Do" class="we_do">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="titlepage">
                                <h2 class="servico">NOSSO SERVIÇO</h2>
                                <p>Possui uma empresa e deseja que seus produtos ou serviços sejam avaliados em tempo real por pessoas reais independente da experiência com a loja? Confira nossos planos:</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div id="hover_color" class="we_box">
                                <span>1</span>
                                <h3>BASIC<br />Anuncie por 1 mês</h3>
                                <p>Ao fim do prazo determinado sua empresa terá acesso as avaliações e sugestões dadas pelos clientes  </p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div id="hover_color" class="we_box">
                                <span>2</span>
                                <h3>ADVANCED<br />Anuncie por 6 meses</h3>
                                <p>A cada 30 dias sua empresa terá acesso as avaliações e sugestões dadas pelos clientes + seus dados tratados com gráficos interativos através de um dashboard do Power Bi </p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div id="hover_color" class="we_box">
                                <span>3</span>
                                <h3>ADVANCED+<br />Anuncie por 1 ano</h3>
                                <p>A cada 15 dias sua empresa terá acesso as avaliações e sugestões dadas pelos clientes + seus dados tratados com gráficos interativos através de um dashboard do Power Bi </p>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <a class="read_more" href="contato.html#contact">Saiba mais</a>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
            <div id="team" class="team">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="titlepage">
                                <h2 class="servico">NOSSA EQUIPE</h2>
                                <p>Conheça nossa equipe de desenvolvedores web e especialistas em análise de dados.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row" id="row-team">
                        <div class="col-md-4" id="teams">
                            <div class="team_box">
                                <figure><img src={alessandra} alt="#" /></figure>
                                <div class="social_box">
                                    <ul class="social_team">
                                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    </ul>
                                    <h3>ALESSANDRA</h3>
                                    <p>Full-Stack</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4" id="teams">
                            <div class="team_box">
                                <figure><img src={guilherme} alt="#" /></figure>
                                <div class="social_box">
                                    <ul class="social_team">
                                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    </ul>
                                    <h3>GUILHERME</h3>
                                    <p>Full-Stack</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4" id="teams">
                            <div class="team_box">
                                <figure><img src={matheus} alt="#" /></figure>
                                <div class="social_box">
                                    <ul class="social_team">
                                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    </ul>
                                    <h3>MATHEUS</h3>
                                    <p>Full-Stack</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4" id="teams">
                            <div class="team_box">
                                <figure><img src={tallyson} alt="#" /></figure>
                                <div class="social_box">
                                    <ul class="social_team">
                                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    </ul>
                                    <h3>TALLYSON</h3>
                                    <p>Full-Stack</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4" id="teams">
                            <div class="team_box">
                                <figure><img src={thamires} alt="#" /></figure>
                                <div class="social_box">
                                    <ul class="social_team">
                                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    </ul>
                                    <h3>THAMIRES</h3>
                                    <p>Full-Stack</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div id="contact" class="contact">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="titlepage">
                                <br/>
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
        </div>


    )
}