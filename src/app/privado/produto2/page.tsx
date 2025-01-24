'use client'

import { useEffect, useState } from "react";

interface IProduto {
    id: string;
    nome: string;
}

export default function Produto2() {
    const url = "http://localhost:8090/produto"
    const [data, setData] = useState<any>([]);

    useEffect( () => {
        obterProdutos();
    }, [])

    async function obterProdutos() {
        const res = await fetch(url)
        const produto = await res.json()
        setData(produto)

        console.log(produto)
    }

    return(
        <div>
            <h1>Hello Produto</h1>

            <div className="text-black m-2 w-96 mx-auto">
                { data.map( (item: IProduto) => 
                    <div key={item.id} className="m-10 flex items-center ">
                        <div className="flex items-center h-20 gap-2 bg-zinc-500 text-white font-semibold w-96 rounded-md">
                            <div className="bg-green-500 p-2 w-16 ml-5 rounded-md text-center">{item.id}</div>
                            <div>{item.nome}</div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}