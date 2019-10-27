from builtins import Exception

from flask import Flask, request, Response, jsonify
import json

from flask_cors import CORS

from PessoaDAO import mostrarPessoas, inserirPessoa, buscarPessoa, removerPessoa, editarPessoa
from pessoa import Pessoa

app = Flask(__name__)
app.config["DEBUG"] = True

cors = CORS(app, resources={"*": {"origins": "*"}})
@app.route('/', methods=['GET'])
def index():
    response = Response(json.dumps(mostrarPessoas()), mimetype="application/json")
    return response
@app.route('/save', methods=['POST'])
def save():
    try:
        pessoa = Pessoa(request.json['nome'], request.json['idade'], request.json['cpf'])
        inserirPessoa(pessoa)
        resp = jsonify("Inseridos com sucesso")
        return resp
    except Exception:
        print(Exception)
@app.route('/<int:id>')
def usuario(id):
    response = Response(json.dumps(buscarPessoa(id)), mimetype="application/json")
    return response
@app.route('/delete/<int:id>',methods=['DELETE'])
def excluir(id):
    removerPessoa(id)
    return jsonify("Foi removido com sucesso")
@app.route('/editar/<int:id>',methods=['PUT'])
def editar(id):
    try:
        pessoa = Pessoa(request.json["nome"], request.json["idade"], request.json["cpf"])
        editarPessoa(id,pessoa)
        return jsonify('Pessoa editada com sucesso')
    except Exception:
        print(Exception)

app.run()