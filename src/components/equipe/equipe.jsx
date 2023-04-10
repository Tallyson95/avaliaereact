import React from "react"
import '../css/bootstrap.min.css'
import '../css/style.css'
import '../css/responsive.css'
import '../css/jquery.mCustomScrollbar.min.css'
import '../css/font-awesome.css'
import '../css/font-awesome.min.css'
import '../css/teste.css'
import alessandra from '../assets/alessandra.jpeg'
import guilherme from '../assets/guilherme.png'
import matheus from '../assets/matheus.jpeg'
import thamires from '../assets/thamires.jpeg'


export function Equipe() {
    return (
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
    )
}