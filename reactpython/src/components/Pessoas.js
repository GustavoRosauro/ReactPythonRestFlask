import React, { Component } from 'react';

export class Pessoas extends Component {
    constructor(props) {
        super(props);
        this.state = { pessoas: [],carregar:false }
        this.Pessoas()
    }
    Pessoas() {
        fetch('http://localhost:5000/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ pessoas: data.pessoas,carregar:true })
            })
    }
    render() {
        let dados = !this.state.carregar?<p>carregando....</p>: <table className='table'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>CPF</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.pessoas.map(pessoa =>
                        <tr key={pessoa.id}>
                            <td>{pessoa.nome}</td>
                            <td>{pessoa.idade}</td>
                            <td>{pessoa.cpf}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        return (
            <div>
            <h1>Bem vindo</h1>
            {dados}
            </div>
        )
    }
}