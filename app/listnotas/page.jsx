'use client'
import Header from "../components/header"
import './style.css'

export default function ListaNotas() {
    return(
        <>
        <Header />
        <h2>Lista de notas</h2>
        <table>
            <thead>
                <th>ID</th>
                <th>Nome</th>
                <th>Trabalho 1</th>
                <th>Trabalho 2</th>
                <th>Nota 1</th>
                <th>Nota 2</th>
                <th>Nota 3</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Julia</td>
                    <td>5</td>
                    <td>3</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    </tr>
            </tbody>
    </table>
        
        </>
    )
}