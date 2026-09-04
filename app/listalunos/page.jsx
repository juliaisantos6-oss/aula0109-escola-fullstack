'use client'
import Header from "../components/header"
import './style.css'

export default function ListaAlunos() {
    return(
        <>
        <Header />
        <h2>Lista de alunos</h2>
        <table>
            <thead>
                <th>ID</th>
                <th>Nome</th>
                <th>Idade</th>
                <th>Série</th>
                <th>RA</th>
                <th>Ações</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Julia</td>
                    <td>17</td>
                    <td>3º</td>
                    <td>1818</td>
                    <td><button>Editar</button>  <button>Excluir</button></td>
                    </tr>
            </tbody>
    </table>
        
        </>
    )
}