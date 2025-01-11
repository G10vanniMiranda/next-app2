"use client";

import axios from "axios";
import { IProduto } from "@/model/Produto";
import { FormEvent, useEffect, useState } from "react";
import { IconEdit, IconPlus, IconTrash } from "@tabler/icons-react";
// CRUD CREATE, READ, UPDATE, DELETE

export default function Produto() {

    const [id, setId] = useState(""); // não sei
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");

    const [search, setSearch] = useState("");

    const [data, setData] = useState([]);

    const url = "http://localhost:3001/produtos";

    // Listar
    useEffect(() => {
        axios.get(url)
            .then(res => setData(res.data))
    }, [ data, setData] )

    // Inserir produto
    // const Inserir = () => {
    const Inserir = () => {
        // function Inserir
        axios.post(url, { nome, descricao, preco })
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
    const buscar = data.filter((item: IProduto) =>
        item.nome.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="flex justify-center flex-col items-center mt-10">
            <div className="container mt-3 hidden md:block">

                <div className="row py-3 px-3">
                    <input type="text" placeholder="Pesquisar"
                        className="p-3 rounded-md text-black bg-zinc-200"
                        value={search} onChange={e => setSearch(e.target.value)}
                    />
                </div>

                <form className="flex gap-5">

                    <input type="text" placeholder="Digite o nome do produto"
                        className="p-3 rounded-md text-black bg-zinc-200"
                        value={nome} onChange={e => setNome(e.target.value)}
                    />

                    <input type="text" placeholder="Digite a descrição"
                        className="p-3 rounded-md text-black bg-zinc-200 flex-1"
                        value={descricao} onChange={e => setDescricao(e.target.value)}
                    />

                    <input type="number" placeholder="Digite o preço"
                        className="p-3 rounded-md text-black bg-zinc-200"
                        value={preco} onChange={e => setPreco(e.target.value)}
                    />

                    <button
                        className="bg-green-600 w-[50px] rounded-md text-white flex justify-center items-center"
                        onClick={Validar}>
                            <IconPlus />
                    </button>
                </form>
            </div>

            <div className="container mt-3">
                <table className="table w-100">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th className="hidden md:block">Descrição</th>
                            <th>Preço</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody className="text-black w-100">
                        {buscar.map((item: IProduto) => (
                            <tr key={item.id} className="">
                                <td className="">{item.id}</td>
                                <td className="">{item.nome}</td>
                                <td className="hidden md:block">{item.descricao}</td>
                                <td >{item.preco}</td>
                                <td className="w-40">
                                    <button className="bg-yellow-500 p-2 m-2 rounded-md text-white">
                                        <IconEdit />
                                    </button>

                                    <button className="bg-red-600 p-2 rounded-md text-white ml-2">
                                        <IconTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}