import React ,{Component} from 'react'
import {Link} from 'react-router-dom'
export class Edit extends Component{
    constructor(props){
        super(props);
        this.pessoa = {
            nome:'',
            idade:0,
            cpf:''
        }
        this.state = {pessoa: this.pessoa}
        this.onChangeNome = this.onChangeNome.bind(this)
        this.onChangeIdade = this.onChangeIdade.bind(this)
        this.onChangeCPF = this.onChangeCPF.bind(this)
        this.editar = this.editar.bind(this)
        this.id = this.props.match.params.id;
        fetch(`http://localhost:5000/${this.id}`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(resp=> resp.json())
        .then(data=>{
            console.log(data.pessoa)
            this.setState({ pessoa:data.pessoa})
        })
        .catch(error => console.log(error))       
    }
    editar(){
        fetch('http://localhost:5000/editar/'+this.id,{
            method:'PUT',
            body: JSON.stringify(this.state.pessoa),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(
            this.props.history.push('/Lista')
        )
        .catch(error => console.log(error))
    }
    onChangeNome(e){
        this.setState({pessoa:{id:parseInt(this.id) ,nome:e.target.value,idade:this.state.pessoa.idade,cpf:this.state.pessoa.cpf}});
    }
    onChangeIdade(e){
        this.setState({pessoa:{id:parseInt(this.id) ,nome:this.state.pessoa.nome,idade:e.target.value,cpf:this.state.pessoa.cpf}});
    }
    onChangeCPF(e){
        this.setState({pessoa:{id:parseInt(this.id) ,nome:this.state.pessoa.nome,idade:this.state.pessoa.idade,cpf:e.target.value}});
    }
    render(){
        return(
            <div className='col-md-8'>
                <Link className='btn btn-info' to={'/Lista'}>Lista</Link>
                <br/>
                <label>Nome</label>
                <input className='form-control' value={this.state.pessoa.nome} type='text' onChange={this.onChangeNome}/>
                <label>Idade</label>
                <input className='form-control' value={this.state.pessoa.idade} type='number' onChange={this.onChangeIdade}/>
                <label>CPF</label>
                <input className='form-control' value={this.state.pessoa.cpf} type='number' onChange={this.onChangeCPF} maxLength={10}/>
                <br/>
                <button className='btn btn-warning' disabled={!this.state.pessoa.nome || !this.state.pessoa.idade || !this.state.pessoa.cpf} onClick={this.editar}>Editar</button>
            </div>
        )
    }
}