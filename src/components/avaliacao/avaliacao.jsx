import React, { useState } from 'react';
import { Button, Form, GridColumn } from 'semantic-ui-react'
import axios from 'axios';
import { Grid } from 'semantic-ui-react'
import './avaliacao.css'
import Table from './tabela';

export default function Avaliacao() {
    const [Produto, setProduto] = useState('');
    const [Modelo, setModelo] = useState('');
    const [Nota, setNota] = useState('');
    const [Comentario, setComentario] = useState('');


    const postData = () => {
        axios.post(`https://63780b125c477765122b6f69.mockapi.io/clientes`, { Produto, Modelo, Nota, Comentario })
        alert("Avaliação enviada!")
        window.location.reload()
    }

    const selecionar = () => {

        if (document.getElementById("a").value == 'TV') {
            document.getElementById("b").style.display = 'block';
            document.getElementById("c").style.display = 'none';
            document.getElementById("d").style.display = 'none';
            document.getElementById("e").style.display = 'none';
            document.getElementById("f").style.display = 'none';
            document.getElementById("g").style.display = 'block';
        }
        else if (document.getElementById("a").value == 'Smartphone') {
            document.getElementById("b").style.display = 'none';
            document.getElementById("c").style.display = 'block';
            document.getElementById("d").style.display = 'none';
            document.getElementById("e").style.display = 'none';
            document.getElementById("f").style.display = 'none';
            document.getElementById("g").style.display = 'block';
        }
        else if (document.getElementById("a").value == 'Mary Jay') {
            document.getElementById("b").style.display = 'none';
            document.getElementById("c").style.display = 'none';
            document.getElementById("d").style.display = 'block';
            document.getElementById("e").style.display = 'none';
            document.getElementById("f").style.display = 'none';
            document.getElementById("g").style.display = 'block';
        }
        else if (document.getElementById("a").value == 'Fox Five Logistic') {
            document.getElementById("b").style.display = 'none';
            document.getElementById("c").style.display = 'none';
            document.getElementById("d").style.display = 'none';
            document.getElementById("e").style.display = 'block';
            document.getElementById("f").style.display = 'none';
            document.getElementById("g").style.display = 'block';
        }
        else if (document.getElementById("a").value == 'Smartwatch') {
            document.getElementById("b").style.display = 'none';
            document.getElementById("c").style.display = 'none';
            document.getElementById("d").style.display = 'none';
            document.getElementById("e").style.display = 'none';
            document.getElementById("f").style.display = 'block';
            document.getElementById("g").style.display = 'block';
        }
    }

    return (

        <div>
            <Form className="create-form">
                <Grid columns={2}>
                    <Grid.Column>
                        <Form.Field>
                            <label class="title2">Produtos</label>
                            <select name="a" id="a" onChange={(e) => setProduto(e.target.value)}>
                                <option selected disabled>Selecione</option>
                                <option >TV</option>
                                <option >Smartphone</option>
                                <option >Mary Jay</option>
                                <option >Fox Five Logistic</option>
                                <option >Smartwatch</option>
                            </select>
                            <br />
                            <Button onClick={() => selecionar()} id='btnavaliar' >Selecionar</Button>
                        </Form.Field>
                        <Form.Field>
                            <div id="b">
                                <label class="title">Modelos</label>
                                <select name="a" onChange={(e) => setModelo(e.target.value)}>
                                    <option selected disabled>Selecione</option>
                                    <option>Samsung 55"</option>
                                    <option>LG 60"</option>
                                    <option>Philco 50"</option>
                                    <option>Sony 47"</option>
                                </select>
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <div id="c">
                                <label class="title">Modelos</label>
                                <select name="a" onChange={(e) => setModelo(e.target.value)}>
                                    <option selected disabled>Selecione</option>
                                    <option>iPhone 14</option>
                                    <option>S22 Ultra</option>
                                    <option>Moto Razr</option>
                                    <option>Motorola V3</option>
                                </select>
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <div id="d">
                                <label class="title">Modelos</label>
                                <select name="a" onChange={(e) => setModelo(e.target.value)}>
                                    <option selected disabled>Selecione</option>
                                    <option>Mary Fragancia 1</option>
                                    <option>Mary Fragancia 2</option>
                                    <option>Mary Fragancia 3</option>
                                    <option>Mary Fragancia 4</option>
                                </select>
                            </div>
                        </Form.Field>
                        <Form.Field >
                            <div id="e">
                                <label class="title">Modelos</label>
                                <select name="a" onChange={(e) => setModelo(e.target.value)}>
                                    <option selected disabled>Selecione</option>
                                    <option>Entrega Rápida</option>
                                    <option>Entrega Normal</option>
                                    <option>Entrega Super Expressa</option>
                                </select>
                            </div>
                        </Form.Field>
                        <Form.Field >
                            <div id="f">
                                <label class="title">Modelos</label>
                                <select name="a" onChange={(e) => setModelo(e.target.value)}>
                                    <option selected disabled>Selecione</option>
                                    <option>Watch M1</option>
                                    <option>Watch S7</option>
                                    <option>Watch Ultra</option>
                                </select>
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <div id="g">
                                <label class="title">Avalie o produto de 0 a 5</label>
                                <select name="a" id="a" onChange={(e) => setNota(e.target.value)}>
                                    <option selected disabled>Selecione</option>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </Form.Field>
                    </Grid.Column>
                    <Grid.Column>
                        <Form.Field>
                            <label class="title">Escreva um comentário</label>
                            <textarea placeholder='Comentário' onChange={(e) => setComentario(e.target.value)} />
                        </Form.Field>
                        <Button id='btnavaliar' onClick={postData} type='submit'>AVALIAR</Button>
                    </Grid.Column>
                </Grid>
                <br></br><br></br>
                
                <Table/>
            </Form>
        </div>
    )
}