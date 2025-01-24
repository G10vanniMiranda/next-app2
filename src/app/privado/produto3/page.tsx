
import axios from "axios";
import { IProduto } from "@/model/Produto";
import Head from "next/head";
import { IconEdit, IconPlus } from "@tabler/icons-react";
import { redirect } from "next/navigation";
// CRUD CREATE, READ, UPDATE, DELETE

export default function Produto3() {

    async function handleCadastrar(form: FormData) {
        "use server"

        const nome = form.get("nome")
        const descricao = form.get("descricao")
        const quantidade = form.get("quantidade")
        const preco = form.get("preco")


        if(nome === ""){
            console.log("Digite o nome do produto");
            return
        }

        if(descricao === ""){
            console.log("Digite o nome do descricao");
            return
        }

        if(quantidade === ""){
            console.log("Digite o nome do quantidade");
            return
        }

        if(quantidade === ""){
            console.log("Digite o nome do quantidade");
        }  
        
        if(preco === ""){
            console.log("Digite o nome do preco");
        }


        await axios.post("http://localhost:8090/produto", { nome, descricao, quantidade, preco })

        redirect("/privado")

    }

    return (
        <div className="flex justify-center flex-col items-center mt-10">
             <Head>
                <title>My page title 3</title>
            </Head>
            
            <div className="container mt-3 hidden md:block">
                <h1 className="text-5xl"> Produto 3 </h1>

                <form action={handleCadastrar} className="flex gap-5">

                    <input type="text" placeholder="Digite o nome do produto"
                        className="p-3 rounded-md text-black bg-zinc-200 flex-1"
                        name="nome"
                    />

                    <input type="text" placeholder="Digite a descrição"
                        className="p-3 rounded-md text-black bg-zinc-200 flex-1"
                        name="descricao"
                    />

                    <input type="text" placeholder="Digite a quantidade"
                        className="p-3 rounded-md text-black bg-zinc-200 flex-1"
                        name="quantidade"
                    />

                    <input type="text" placeholder="Digite o preço"
                        className="p-3 rounded-md text-black bg-zinc-200 flex-1"
                        name="preco"
                    />

                    <button type="submit" className="bg-green-600 w-[50px] rounded-md text-white flex justify-center items-center">
                        <IconPlus />
                    </button>

                </form>
            </div>


        </div>
    )
}