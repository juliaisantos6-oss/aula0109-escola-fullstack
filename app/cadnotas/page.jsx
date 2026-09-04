'use client'
import { useState } from 'react'
import Header from '../components/header'
import './style.css'

export default function CadNotas() {
    const [nome, setNome] = useState('') //hook useState
    const [trabalho1, setTrabalho1] = useState('')
    const [trabalho2, setTrabalho2] = useState('')
    const [n1, setN1] = useState('')
    const [n2, setN2] = useState('')
    const [n3, setN3] = useState('')

    return(
        <>
        <Header />
        <main>
            <h2>Cadastro de Notas</h2>
            <form action="">
                <label htmlFor="nome">Nome:</label>
                <input type="text" value={nome} onChange={(e) => setNome
                (e.target.value)} />

                <label htmlFor="trabalho1">Trabalho 1:</label>
                <input type="number" value={trabalho1} onChange={(e) => setTrabalho1
                (e.target.value)} />

                <label htmlFor="trabalho2">Trabalho 2:</label>
                <input type="number" value={trabalho2} onChange={(e) => setTrabalho2
                (e.target.value)} />

                <label htmlFor="n1">Nota 1:</label>
                <input type="number" value={n1} onChange={(e) => setN1
                (e.target.value)} />

                <label htmlFor="n2">Nota 2:</label>
                <input type="number" value={n2} onChange={(e) => setN2
                (e.target.value)} />

                <label htmlFor="n3">Nota 3:</label>
                <input type="number" value={n3} onChange={(e) => setN3
                (e.target.value)} />

                <button>Salvar</button>
            </form>
        </main>
        </>
    )
}
