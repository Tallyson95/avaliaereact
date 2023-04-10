import React, { useState } from 'react';
import { Button, Form, FormField, Grid, GridColumn } from 'semantic-ui-react'
import axios from 'axios';
import './create.css'

export default function Create() {
    const [Nome, setNome] = useState('');
    const[Sobrenome, setSobrenome] = useState('');
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');
    const [Senha1, setSenha1] = useState('');
    const [Cep, setCep] = useState('');

    const postData = () => {
        axios.post(`https://63780b125c477765122b6f69.mockapi.io/clientes`, { Nome, Sobrenome,Email, Senha, Senha1, Cep })
        alert("Dados enviados com sucesso")
        window.location.reload()
    }

    return (
        
        <div class='formulario'>
            
            
            <Form className="create-form">
            <h2 className='cad'>CADASTRAR-SE</h2>
                <Grid columns={2}>
                <Grid.Column>
                <Form.Field>
                    <label>Nome</label>
                    <input placeholder='Nome' onChange={(e) => setNome(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Sobrenome</label>
                    <input placeholder='Sobrenome' onChange={(e) => setSobrenome(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                
                </Form.Field>
                </Grid.Column>

                <Grid.Column>
                <FormField>
                    <label>CEP</label>
                    <input placeholder='CEP' onChange={(e) => setCep(e.target.value)}/>
                </FormField>
                <Form.Field>
                    <label>Senha</label>
                    <input type="password" placeholder='Senha' onChange={(e) => setSenha(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Confirmação</label>
                    <input type="password" placeholder='Confirmar senha' onChange={(e) => setSenha1(e.target.value)} />
                </Form.Field>
                </Grid.Column>
                </Grid>
                <Button onClick={postData} type='submit'>ENVIAR</Button>
                
            </Form>
            
        </div>
    )
}