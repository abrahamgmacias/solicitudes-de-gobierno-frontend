
export default function Label(props) {
    return (
        <label
            className={props.className}
            for={props.for}>{props.label}
        </label>
    )
}