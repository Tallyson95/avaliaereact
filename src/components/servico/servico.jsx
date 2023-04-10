import React from "react"
import '../css/bootstrap.min.css'
import '../css/style.css'
import '../css/responsive.css'
import '../css/jquery.mCustomScrollbar.min.css'
import '../css/font-awesome.css'
import '../css/font-awesome.min.css'
import '../css/teste.css'


export function Servico() {
    return (
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
                            <h3>BASIC<br/>Anuncie por 1 mês</h3>
                            <p>Ao fim do prazo determinado sua empresa terá acesso as avaliações e sugestões dadas pelos clientes  </p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div id="hover_color" class="we_box">
                            <span>2</span>
                            <h3>ADVANCED<br/>Anuncie por 6 meses</h3>
                            <p>A cada 30 dias sua empresa terá acesso as avaliações e sugestões dadas pelos clientes + seus dados tratados com gráficos interativos através de um dashboard do Power Bi </p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div id="hover_color" class="we_box">
                            <span>3</span>
                            <h3>ADVANCED+<br/>Anuncie por 1 ano</h3>
                            <p>A cada 15 dias sua empresa terá acesso as avaliações e sugestões dadas pelos clientes + seus dados tratados com gráficos interativos através de um dashboard do Power Bi </p>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <a class="read_more" href="contato.html#contact">Saiba mais</a>
                    </div>
                </div>
            </div>
        </div>
    )
}