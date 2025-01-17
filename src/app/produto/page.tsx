"use client";

import axios from "axios";
import { IProduto } from "@/model/Produto";
import { FormEvent, useEffect, useState } from "react";
import { IconEdit, IconPlus, IconTrash } from "@tabler/icons-react";
// CRUD CREATE, READ, UPDATE, DELETE

export default function Produto() {

    const [id, setId] = useState("");       // não sei
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(0);
    const [quantidade, setQuantidade] = useState(0);
    const [descricao, setDescricao] = useState("");

    const [data, setData] = useState([]); // array
    const [search, setSearch] = useState("");
    const [editarShow, setEditarShow] = useState("hidden");

    const url = "http://localhost:8090/produto";

    // 1 :: Listar
    useEffect(() => {
        axios.get(url)
            .then(res => setData(res.data))
    }, [ data, setData] )

    // 2 :: Inserir produto
    // const Inserir = () => {
    const Inserir = () => {
        // function Inserir
        axios.post(url, { nome, descricao, preco, quantidade })
    }

    // 3 :: Validar
    const Validar = (event: FormEvent) => {
        event.preventDefault();

        if (nome === "" || descricao === "" || quantidade === 0  || preco === 0 ) {
            alert("Preencha todos os campos");
            return false;
        }

        Inserir();
    }

    // 4 :: Excluir
    const Excluir = (id: string, nome: string) => {
        const confirmar = window.confirm("Deseja realmente excluir? " + nome);

        if (!confirmar) {
            return;
        }

        axios.delete(`${url}/${id}`)
    }

    // 5 :: Carrega
    const Carregar = (id: string, nome: string, descricao: string, quantidade: number, preco: number) => {
        setId(id);
        setNome(nome);
        setDescricao(descricao);
        setQuantidade(quantidade);
        setPreco(preco);

        setEditarShow("");
    }

    // 6 :: Editar
    const Editar = async (event: FormEvent) => {
        event.preventDefault();

        axios.put(`${url}/${id}`, { nome, descricao, quantidade, preco } )

        .then( () => {
            alert("Editado com sucesso");

            setId("");
            setNome("");
            setDescricao("");
            setQuantidade(0);
            setPreco(0);

            setEditarShow("hidden");
        })
    }

    // 7 :: Pesquisar
    const buscar = data.filter((item: IProduto) =>
        item.nome.toLowerCase().includes(search.toLowerCase())
    );

    // 8 :: Aprensetar na web
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
                        className="p-3 rounded-md text-black bg-zinc-200 flex-1"
                        value={nome} onChange={e => setNome(e.target.value)}
                    />

                    <input type="text" placeholder="Digite a descrição"
                        className="p-3 rounded-md text-black bg-zinc-200 flex-1"
                        value={descricao} onChange={e => setDescricao(e.target.value)}
                    />

                    <input type="text" placeholder="Digite a Qtd "
                        className="p-3 rounded-md text-black bg-zinc-200 w-32 text-center"
                        value={quantidade} onChange={e => setQuantidade(parseInt(e.target.value))}
                    />

                    <input type="number" placeholder="Digite o preço"
                        className="p-3 rounded-md text-black bg-zinc-200  w-32 text-right"
                        value={preco} onChange={e => setPreco(+e.target.value)}
                    />

                    <button
                        className="bg-green-600 w-[50px] rounded-md text-white flex justify-center items-center"
                        onClick={Validar}>
                            <IconPlus />
                    </button>

                    <button
                        className={`bg-yellow-500 w-[50px] rounded-md text-white flex justify-center items-center ${ editarShow  } `}
                        onClick={Editar}> <IconEdit />
                    </button>
                </form>
            </div>

            <div className="container mt-3">
                <table className="table w-100">
                    <thead>
                        <tr>
                            <th className="hidden">ID</th>
                            <th>Nome</th>
                            <th className=" ">Descrição</th>
                            <th className=" ">Qtd</th>
                            <th>Preço</th>
                            <th className="">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="text-black w-100">
                        {buscar.map((item: IProduto) => (
                            <tr key={item.id} className="">
                                <td className="hidden">{item.id}</td>
                                <td className="">{item.nome}</td>
                                {/* resolver */}
                                <td className=" ">{item.descricao}</td>
                                <td className=" ">{item.quantidade}</td>
                                <td >{item.preco}</td>
                                <td className="w-40">
                                    <button className="bg-yellow-500 p-2 rounded-md text-white"
                                        onClick={() => Carregar( item.id, item.nome, item.descricao, item.quantidade, item.preco)}
                                    >
                                        <IconEdit />
                                    </button>

                                    <button className="bg-red-600 p-2 rounded-md text-white ml-2"
                                        onClick={ () => Excluir(item.id, item.nome)}
                                    >
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