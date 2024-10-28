import Button from "./Button";
import { useState } from 'react';
import { useEffect } from "react";

export default function Localizacao({cep}) {
    
    const [display, setDisplay] = useState("none");
    const [cidade, setCidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setCidade(data.localidade);
                setBairro(data.bairro);
                setLogradouro(data.logradouro);
            } catch (error) {
                console.log(error);
                setCidade("Não encontrado");
                setBairro("Não encontrado");
                setLogradouro("Não encontrado");
            }
        }

        fetchData();
    }, []);
    return (
        <>
                
            <Button texto="Localização" classe="w-60" onClick={() => setDisplay(display === "none" ? "block" : "none")} />
            <div className="flex justify-between flex-wrap w-60 h-20 my-4 text-xl" style={{display: display}}> 
               
                <p>CEP: {cep}</p>
                <p>Cidade: {cidade} </p>
                <p>Bairro: {bairro}</p> 
                <p>Rua: {logradouro} </p>
                <p>Horário: {new Date().toLocaleTimeString()}</p>
            </div>
            
        </>
        
    )
}