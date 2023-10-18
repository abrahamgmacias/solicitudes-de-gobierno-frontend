

export default function InputField(props) {
    return (
        <input
            onClick={props.onClick}
            placeholder={props.placeholder}
            type={props.type}
            id={props.id}
            name={props.name}
            className={`${props.validate ? "validate" : null} ${props.className}`}
            onInput={!!props.setState ? e => props.setState(e.target.value) : null}
            onChange={!!props.onChange ? props.setChange : null}
        />
    )
}