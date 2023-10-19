export default function Button(props) {
    return (
        <button
            type="button"
            className={props.className ? props.className : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"}
            onClick={props.onClick}>{props.button}</button>
    )
}