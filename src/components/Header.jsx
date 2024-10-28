import Profile from "./Profile";
export default function Header(props) {
    return (
        <header className="flex justify-start items-center px-4 py-4 bg-slate-800"> 
            <Profile img="src/assets/lou.jpg"/>
            <h1>{props.title}</h1>
        </header>
    );
}