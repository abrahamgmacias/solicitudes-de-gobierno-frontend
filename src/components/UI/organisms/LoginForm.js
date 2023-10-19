import Button from '../atoms/Button';
import InputField from '../atoms/InputField';
import Label from '../atoms/Label';

export default function LoginForm(props) {
    const inputStyle = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    const labelStyle = "block text-gray-700 text-sm font-bold mb-2"

    return (
        <form>
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <div className="mb-4">
                <Label
                    className={labelStyle}
                    for="username"
                    label="Username:"
                />

                <InputField
                    className={inputStyle}
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                />
            </div>

            <div className="mb-6">
                <Label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="password"
                    label="Password:"
                />

                <InputField
                    className={inputStyle}
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                />
            </div>

            <div className="flex items-center justify-between">
                <Button button="Sign in"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={null}
                />
            </div>
        </form>
    )
}