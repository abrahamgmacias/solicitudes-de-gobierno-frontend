import InputField from "../atoms/InputField";
import Button from "../atoms/Button";

export default function SearchBar(props) {
    return (
        <div className="flex items-center justify-center ml-4 mr-4 mt-4">   
            <InputField
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="100 Años de Soledad..."
                type="search-bar"
                id="search-bar"
                setState={props.setState}
            />

            <div className="flex items-center justify-between">
                <Button button="Search"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
                />
            </div>
        </div>
    )
}