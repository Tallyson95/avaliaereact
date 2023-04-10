import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react'

import './bootstrap.min.css'
import '../css/teste.css'
//import '../login/all.css'
import { Link } from 'react-router-dom';

export function Cadastros() {
    const [Nome, setNome] = useState('');
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');
    const [SenhaConfirm, setSenhaConfirm] = useState('');
    const [Rg, setRg] = useState('');

    const postData = () => {
        axios.post(`https://63780b125c477765122b6f69.mockapi.io/clientes`, {
            Nome,
            Email,
            Senha,
            SenhaConfirm,
            Rg
        })
        LimparForm()
    }
    function LimparForm() {
        document.getElementById("nome").value = "";
        document.getElementById("senha").value = "";
        document.getElementById("c_senha").value = "";
        document.getElementById("email").value = "";
        document.getElementById("rg").value = "";
        alert('Você foi cadastrado com sucesso, realize o login para continuar.')
        window.location.replace("/login")
    }

    return (
        <div class="header">
            <div class="inner-header flex" id="inner-header">
                <div class="container1" id="containerCadastro">
                    <div class="row">
                        <div class="col-md-offset-2 col-md-8">
                            <div class="usuario-conteudo">
                                <h3 id='cadastrese' class="cadastre-se">Cadastre-se</h3>
                                <Form name="form1" class="formulario">
                                    <div class="cadastro">
                                        <div class="dados">
                                            <div class="dados1">
                                                <Form.Field>
                                                    <div class="form-group">
                                                        <label id='nome' for="nome">Nome</label>
                                                        <input onChange={(e) => setNome(e.target.value)} type="text" class="form-control" id="nome" placeholder="Nome do usuário" required />
                                                    </div>
                                                </Form.Field>
                                                <Form.Field>
                                                    <div class="form-group">
                                                        <label id='nome' for="email">Email</label>
                                                        <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" id="email" size="30" placeholder="Informe seu email" required />
                                                    </div>
                                                </Form.Field>
                                                <Form.Field>
                                                    <div class="form-group">
                                                        <label id='nome' for="senha">Senha</label>
                                                        <input onChange={(e) => setSenha(e.target.value)} type="password" class="form-control" id="senha" placeholder="Informe uma senha" required />
                                                    </div>
                                                </Form.Field>
                                            </div>
                                            <div class="dados2">
                                                <Form.Field>
                                                    <div class="form-group">
                                                        <label id='nome2' for="c_senha">Confirme a Senha</label>
                                                        <input onChange={(e) => setSenhaConfirm(e.target.value)} type="password" class="form-control" id="c_senha" placeholder="Confirme a senha" required />
                                                    </div>
                                                </Form.Field>
                                                <Form.Field>
                                                    <div class="form-group">
                                                        <label id='nome' for="rg">RG</label>
                                                        <input onChange={(e) => setRg(e.target.value)} type="text" class="form-control" id="rg" size="30" placeholder="Informe seu RG" maxLength="9" required />
                                                    </div>
                                                </Form.Field>
                                                <br/>
                                                <div class="endereco">
                                                    <div class="endereco1">
                                                        <Button onClick={postData} type="submit" class="btn btn-primary" id="botaoCadastrar" name="btnc">Cadastrar</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <strong><p id='cadastrese22' class="possuiConta">Já possui uma conta? <Link to="/login" id="botaoEntrar22">Login</Link></p></strong>

                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}