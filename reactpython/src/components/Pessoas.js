import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export class Pessoas extends Component {
    constructor(props) {
        super(props);
        this.state = { pessoas: [],carregar:false }
        this.Pessoas()
    }
    delete(id){
        fetch('http://localhost:5000/delete/'+id,{
            method:'DELETE',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(this.Pessoas())
        .catch(error => console.log(error))
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
                            <td><button className='btn btn-danger' onClick={this.delete.bind(this, pessoa.id)}>Excluir</button></td>
                            <td><Link className='btn btn-warning' to={'/Edit/'+ pessoa.id}>Editar</Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
        return (
            <div>
            <Link className="btn btn-success" to={'/cadastro'}>Adicionar</Link>
            <h1>Bem vindo</h1>
            {dados}
            </div>
        )
    }
}