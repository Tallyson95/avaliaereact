import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button, TableRow } from 'semantic-ui-react';

export default function Read() {
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

    const onDelete = (id) => {
        axios.delete(`https://63780b0b5c477765122b6ea9.mockapi.io/usuario/${id}`)
            .then(() => {
                getData();
            })
    }

    const confirmar = () => {
        alert('Conta Confirmada.')
    }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nome</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Senha</Table.HeaderCell>
                        <Table.HeaderCell>RG</Table.HeaderCell>
                        <Table.HeaderCell>CEP</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row className='tabela'>
                                <Table.Cell>{data.Nome}</Table.Cell>
                                <Table.Cell>{data.Email}</Table.Cell>
                                <Table.Cell>{data.Senha}</Table.Cell>
                                <Table.Cell>{data.Rg}</Table.Cell>
                                <Table.Cell>{data.Cep}</Table.Cell>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>Remover</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
            <Button onClick={() => confirmar()}>Confirmar Compra</Button>
        </div>
    )
}