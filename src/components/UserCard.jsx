import Profile from "./Profile";
export default function UserCard(props) {
    
    return ( 
        <div className=" flex flex-col items-center bg-slate-800 w-32 sm:w-48 h-48 rounded-xl hover:bg-slate-700 hover:cursor-pointer">
            <Profile img={props.img} />
            <h2>{props.nome} </h2>
            <p>{props.tipo}</p>
            <p>{props.status}</p>
        </div>
    )
}