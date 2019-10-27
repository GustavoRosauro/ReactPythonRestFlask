import React, {Component} from 'react';

export class Cadastro extends Component{
    constructor(props){
        super(props);
        this.onChangeNome = this.onChangeNome.bind(this)
        this.onChangeIdade = this.onChangeIdade.bind(this)
        this.onChangeCPF = this.onChangeCPF.bind(this)
        this.Enviar = this.Enviar.bind(this)
        this.pessoa = {
            nome:"",
            idade:0,
            cpf:""
        };
    }
    onChangeNome(e){
        this.pessoa.nome = e.target.value;
    }
    onChangeIdade(e){
        this.pessoa.idade = e.target.value;
    }
    onChangeCPF(e){
        this.pessoa.cpf = e.target.value;
    }
    Enviar(){
        fetch('http://localhost:5000/save',{
            method:'POST',
            body: JSON.stringify(this.pessoa),
            headers:{
               'Content-Type':'application/json' 
            }
        }).then(resp =>{
            this.props.history.push('/')
        }).catch(error => console.log(error))

    }
    render(){
        return(
            <div className="col-md-6">
                <label>Nome</label>
                <input className="form-control" type="text" onChange={this.onChangeNome}/>
                <label>Idade</label>
                <input className="form-control" onChange={this.onChangeIdade} type="number"/>
                <label>CPF</label> 
                <input className="form-control" onChange={this.onChangeCPF} type="number" maxLength="11"/>
                <br/>
                <button className="btn btn-success" onClick={this.Enviar}>Salvar</button>
            </div>
        )
    }
}