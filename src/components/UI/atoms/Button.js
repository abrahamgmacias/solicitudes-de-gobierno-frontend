export default function Button(props) {
    return (
        <button
            type="button"
            className={props.className}
            onClick={!!props.onClick ? props.onClick : null}>{props.button}</button>
    )
}