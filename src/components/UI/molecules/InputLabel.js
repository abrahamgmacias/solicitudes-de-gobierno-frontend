import InputField from "../atoms/InputField";
import Label from "../atoms/Label";

export default function InputLabel(props) {
    // const Span = () => {
    //     return (
    //         <span className="helper-text" data-error="Escribe un correo válido."></span>
    //     )
    // }

    return (
        <div className={`input-field ${props.className} ${props.icon ? "iconInputCard" : null}`}>
            <div classname="labelInputLabel">
                <Label className="lableInputLabel"></Label>
            </div>
            <InputField
                onClick={props.onClick}
                className={props.inputClass}
                placeholder={props.placeholder}
                id={props.id} type={props.type}
                validate={props.validate}
                setState={props.setState}
                setChange={props.setChange} />

            {/* {props.icon ? <i className="material.icons prefix search-icon">{props.icon}</i> : null}
            {props.validate ? <Span></Span> : null} */}
        </div>
    )
}