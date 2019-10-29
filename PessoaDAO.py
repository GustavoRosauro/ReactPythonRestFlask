
import mysql.connector
from pessoa import Pessoa

db = mysql.connector.connect(host="localhost", database="empresa", user="root", password="",)

def mostrarPessoas():
    cusror = db.cursor()
    listaPessoas = list()
    sqlSelet = "SELECT ID, NOME,IDADE,CPF FROM PESSOA"
    cusror.execute(sqlSelet)
    resutado = cusror.fetchall()
    for pessoa in resutado:
        p = {
            "id": pessoa[0],
            "nome":pessoa[1],
            "idade": pessoa[2],
            "cpf": pessoa[3]}
        listaPessoas.append(p)
    return {"pessoas": listaPessoas}
def inserirPessoa(pessoa: Pessoa):
    cursor = db.cursor()
    sqlInsert = "INSERT INTO PESSOA (NOME,IDADE,CPF) VALUES (%s,%s,%s)"
    dados = (pessoa.getNome(), pessoa.getIdade(),pessoa.getCPF())
    cursor.execute(sqlInsert, dados)
    db.commit()
def buscarPessoa(id):
    cursor = db.cursor()
    sqlSelect = "SELECT NOME,IDADE,CPF FROM PESSOA WHERE ID =" + str(id)
    cursor.execute(sqlSelect)
    resultado = cursor.fetchall()
    for row in resultado:
        pessoa = {
            "nome": row[0],
            "idade": row[1],
            "cpf": row[2]
        }
    return {"pessoa": pessoa}
def removerPessoa(id):
    cursor = db.cursor()
    sqlDelete = "DELETE FROM PESSOA WHERE ID = " + str(id)
    cursor.execute(sqlDelete)
    db.commit()
def editarPessoa(id,pessoa:Pessoa):
    cursor = db.cursor()
    sqlUpdate = "UPDATE PESSOA " \
                "SET NOME = %s, " \
                "IDADE = %s, " \
                "CPF = %s " \
                "WHERE ID = "+ str(id)
    dados = (pessoa.getNome(),pessoa.getIdade(),pessoa.getCPF())
    cursor.execute(sqlUpdate, dados)
    db.commit()