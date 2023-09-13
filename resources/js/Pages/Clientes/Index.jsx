import NavLink from "@/Components/NavLink";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import SecondaryButton from "@/Components/SecondaryButton";
import axios from "axios";
import { useState } from "react";

export default function CadastoCliente() {
    const [cliente, setCliente] = useState({
        nome: "",
        endereco: "",
        telefone: "",
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCliente({ ...cliente, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Aqui você pode enviar os dados para o servidor, por exemplo, usando axios
        axios
            .post("/Cliente/Create", cliente)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                // Trate os erros, se houverem
                console.error(error);
            });
    };

    return (
        <div>
            <NavLink>Cadastro de clientes</NavLink>

            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <InputLabel>Nome:</InputLabel>
                        <TextInput
                            type="text"
                            id="nome"
                            name="nome"
                            value={cliente.nome}
                            onChange={handleChange}
                        ></TextInput>
                    </div>
                    <div className="form-control">
                        <InputLabel>Endereço:</InputLabel>
                        <TextInput
                            type="text"
                            id="endereco"
                            name="endereco"
                            value={cliente.endereco}
                            onChange={handleChange}
                        ></TextInput>
                    </div>
                    <div className="form-control">
                        <InputLabel>Telefone:</InputLabel>
                        <TextInput
                            type="text"
                            id="telefone"
                            name="telefone"
                            value={cliente.telefone}
                            onChange={handleChange}
                        ></TextInput>
                    </div>
                    <div className="form-control">
                        <InputLabel>E-mail:</InputLabel>
                        <TextInput
                            type="text"
                            id="email"
                            name="email"
                            value={cliente.email}
                            onChange={handleChange}
                        ></TextInput>
                    </div>
                    <SecondaryButton type="submit">
                        Cadastrar Cliente
                    </SecondaryButton>
                </form>
            </div>
        </div>
    );
}
