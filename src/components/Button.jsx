export default function Button(props) {
    return (
        <button className={"bg-cyan-600 hover:bg-cyan-500 rounded-lg p-2 mt-4 " + props.classe} onClick={props.onClick}>
            {props.texto}
        </button>
    );
}