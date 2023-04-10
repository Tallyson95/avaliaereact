import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button, TableRow } from 'semantic-ui-react';
import './tabela.css'

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://63780b125c477765122b6f69.mockapi.io/clientes`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data)
            })
    }, []);

    

    const getData = () => {
        axios.get(`https://63780b125c477765122b6f69.mockapi.io/clientes`)
            .then((getData) => {
                setAPIData(getData.data)
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://63780b125c477765122b6f69.mockapi.io/clientes/${id}`)
        .then(() => {
            getData();
        })
    }

  


return (
    <div>
        <Table singleLine>
            <Table.Header>
                <Table.Row id='tab'>
                    
                    <Table.HeaderCell>Produto</Table.HeaderCell>
                    <Table.HeaderCell>Modelo</Table.HeaderCell>
                    <Table.HeaderCell>Nota</Table.HeaderCell>
                    <Table.HeaderCell>Comentario</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {APIData.map((data) => {
                    return (
                        <Table.Row className='tabela'>
                            <Table.Cell>{data.Produto}</Table.Cell>
                            <Table.Cell>{data.Modelo}</Table.Cell>
                            <Table.Cell>{data.Nota}</Table.Cell>
                            <Table.Cell>{data.Comentario}</Table.Cell>
                            
                            <Table.Cell>
                                <Button onClick={() => onDelete(data.id)}>Remover</Button>
                            </Table.Cell>
                        </Table.Row>
                    )
                })}
            </Table.Body>
        </Table>
    
        
    </div>
)
}