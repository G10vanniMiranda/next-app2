"use client";

import { IProduto } from "@/model/Produto";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
// CRUD CREATE, READ, UPDATE, DELETE

export default function Produto(){
    
    const [id, setId] = useState("");
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");

    const [search, setSearch] = useState("");

    const [data, setData] = useState([]);

    const url = "http://localhost:3001/produtos";

    // Listar
    useEffect( () => {
        axios.get(url)
        .then(res => setData(res.data))
    }, [data, setData])

    // Inserir produto
    // const Inserir = () => {
    
    const Inserir = () => {
        // function Inserir
        axios.post( url, {nome, descricao, preco} )
    }

    // Validar
    const Validar = (event: FormEvent) => {
        event.preventDefault();

        if (nome === "" || descricao === "" || preco === "") {
            alert("Preencha todos os campos");
            return false;
        }

        Inserir();
    }

    // Pesquisar
    const filteredData = data.filter((item: IProduto) =>{
        item.nome.toLowerCase().includes(search.toLowerCase())
    });

    return (
        <div className="flex justify-center flex-col items-center mt-10">
            <form className="flex flex-col gap-5">
                
                <input type="text" placeholder="Digite o nome do produto"
                    className="p-2 rounded-md text-white bg-zinc-800"
                  value={nome}  onChange={ e => setNome(e.target.value) }
                />

                <input type="text" placeholder="Digite a descrição"
                    className="p-2 rounded-md text-white bg-zinc-800"
                  value={descricao}  onChange={ e => setDescricao(e.target.value) }
                />

                <input type="number" placeholder="Digite o preço" 
                    className="p-2 rounded-md text-white bg-zinc-800"
                  value={preco}  onChange={ e => setPreco(e.target.value) }
                />

                <button 
                className="bg-green-600 p-2 rounded-md text-white"
                onClick={Validar}>Inserir</button>
            </form>

            <table className="">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody className="text-white">
                    { data.map((item: IProduto) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.descricao}</td>
                            <td>{item.preco}</td>
                            <td>
                                <button className="bg-green-600 p-2 rounded-md text-white">Editar</button>
                                <button className="bg-red-600 p-2 rounded-md text-white">Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}