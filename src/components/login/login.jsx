import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './bootstrap.min.css'
import '../css/teste.css'
import { Link } from "react-router-dom"
import { Button, Form } from 'semantic-ui-react'
//import './all.css'

export function Login() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://63780b0b5c477765122b6ea9.mockapi.io/usuario`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data)
            })
    }, []);

    const getData = () => {
        axios.get(`https://63780b0b5c477765122b6ea9.mockapi.io/usuario`)
            .then((getData) => {
                setAPIData(getData.data)
            })
    }

    const logar = () => {
        {
            APIData.map((data) => {


                if (data.Email == document.getElementById("email_login").value && data.Senha == document.getElementById("senha_login").value) {
                    var result = 1
                
                }
                else if (data.Email != document.getElementById("email_login").value || data.Senha != document.getElementById("senha_login").value) {
                    var result = 2

                }

                if (result == 1) {
                    window.location.replace("/avaliacao")
                }
                else{
                    document.getElementById("email_login").value = "";
                    document.getElementById("senha_login").value = "";
                    document.getElementById("errologin").style.display = "block"
                }

            })
        }
    }
    return (
        <div class="header">
            <div class="inner-header flex" id="inner-header">
                <div class="container" id="containerLogin">
                    <div  class="d-flex justify-content-center h-100">
                        <div class="card">
                            <div id='login11' class="card-header">
                                <h3>Fazer Login</h3>
                            </div>
                            <div class="card-body">
                                <Form name="form1">
                                    <Form.Field>
                                        <div class="input-group form-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-user"></i></span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="E-mail" id="email_login" />
                                        </div>
                                    </Form.Field>
                                    <Form.Field>
                                        <div class="input-group form-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-key"></i></span>
                                            </div>
                                            <input type="password" class="form-control" placeholder="Senha" id="senha_login" />
                                        </div>
                                    </Form.Field>
                                    <p id="errologin">Email e/ou senha incorretos</p>
                                    <div class="form-group">
                                        <Button onClick={() => logar()} type="submit" value="Entrar" class="btn float-right login_btn" id="botaoEntrar">Entrar</Button>
                                    </div>
                                </Form>
                            </div>
                            <div class="card-footer">
                                <div class="d-flex justify-content-center links">
                                    <p id='login111'>Não tem uma conta?<Link to="/cadastros" id="botaoCriar2"> Criar</Link></p>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <a id="botaoRecuperar" href="#">Esqueci minha senha</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}