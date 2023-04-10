import React from "react"
import '../css/bootstrap.min.css'
import '../css/style.css'
import '../css/responsive.css'
import '../css/jquery.mCustomScrollbar.min.css'
import '../css/font-awesome.css'
import '../css/font-awesome.min.css'
import '../css/teste.css'
import software_img from '../assets/software_img.jpg'
import { Link } from "react-router-dom"


export function Avaliae() {
    return (
        <div class="software">
            <div class="container-fluid">
                <div class="row d_flex">
                    <div class="col-md-6">
                        <div class="titlepage">
                            <h2 class="avaliae">AvaliAê!</h2>
                            <p class="descAvaliae">Comprou um produto ou contratou um serviço recentemente e deseja avaliá-lo em nossa plataforma para que a empresa melhore a sua experiência no futuro? Clique no botão abaixo para se inscrever na lista de espera e desfrutar do nosso serviço quando estiver pronto.</p>
                            <a class="read_more" href="login.html">Lista de Espera</a>
                            <Link to="/login">Login</Link>
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
    )
}