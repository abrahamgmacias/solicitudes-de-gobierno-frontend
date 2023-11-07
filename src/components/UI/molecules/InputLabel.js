import InputField from "../atoms/InputField";
import Label from "../atoms/Label";


export default function InputLabel(props) {
    return (
        <div className="mb-6">
            <Label 
                label={props.label}
                className="block text-gray-700 text-sm font-bold mb-2" 
                for={props.for}
            />

            <InputField 
                onClick={props.onClick}
                placeholder={props.placeholder}
                type={props.type}
                id={props.id}
                name={props.name}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onInput={props.onInput}
                onChange={props.onChange}
            />
        </div>
    )
}