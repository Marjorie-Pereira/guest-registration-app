import Button from "./Button";
import UserCard from "./UserCard";
import { useState } from 'react';

export default function Form() {    
    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('Aluno');
    const [status, setStatus] = useState('Confirmado');
    const [foto, setFoto] = useState('');
    const [participantes, setParticipantes] = useState([]);
    const [visibility, setVisibility] = useState('invisible');
   
    function cadastrarParticipante(e){
        e.preventDefault(); 
        setParticipantes([...participantes, <UserCard nome={nome} tipo={tipo} status={status} img={foto} />].sort((a, b) => a.props["nome"].localeCompare(b.props["nome"])));
        setVisibility('visible');
        const convidado = document.getElementById('nome');
        const telefone = document.getElementById('telefone');
        const photo_url = document.getElementById('photo_url');
        convidado.value = '';
        telefone.value = '';
        photo_url.value = '';
        
    }

    return (
        <section className='mt-10 flex justify-around'>
            <div className={"fixed top-4 duration-200 bg-blue-500 p-2 rounded-xl " + visibility}>Usuário Cadastrado</div>
            <div className="bg-slate-800 p-4 w-80 h-fit rounded-xl text-start flex-col justify-center align-center self-start">
                
                <form onSubmit={cadastrarParticipante}>
                    <label htmlFor="nome" >Nome:</label>
                    <input type="text" id="nome" name="nome" required placeholder="seu nome" className="w-full p-1 rounded-md" onChange={(e) => setNome(e.target.value)} onFocus={() => setVisibility('invisible') } />

                    <label htmlFor="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone" required placeholder="(XX) XXXXX-XXXX" title="Formato esperado: (XX) XXXXX-XXXX" className="w-full p-1 rounded-md"  />

                    <label htmlFor="egresso/convidado" className="block" >Egresso/Convidado</label>
                    <input type="radio" name="egresso/convidado" id="tipo" value="sim" onChange={() => setTipo("Egresso/Convidado")} /> Sim
                    <input type="radio" name="egresso/convidado" id="tipo" value="não" className="ml-3" defaultChecked={tipo} /> Não

                    <label htmlFor="Pago" className="block">Pago</label>
                    <input type="radio" name="Pago" id="status" value="sim" defaultChecked={status} /> Sim
                    <input type="radio" name="Pago" id="status" value="não" className="ml-3" onChange={() => setStatus("Não Confirmado")} /> Não

                    <label htmlFor="foto" className="block">Foto:</label>
                    <input type="text" id='photo_url' placeholder="url da foto" className="w-full p-1 rounded-md" onChange={(e) => setFoto(e.target.value)} />
                    
                    <Button texto="Enviar" classe="w-full"/>
                </form>

            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-2">
                
                {participantes.map((participante, index) => (
                    <li key={index}>
                        {participante}{" "}
                    </li>
                ))}
                
                
                
            </ul>
            
        </section>
        
        
    );
}