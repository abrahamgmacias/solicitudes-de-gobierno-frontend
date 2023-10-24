import Button from '../atoms/Button';
import InputField from '../atoms/InputField';
import Label from '../atoms/Label';
import { useState } from 'react';
import { loginUser } from '../../../requests/apiCalls';
import { loginUserCredentials } from '../../../requests/credentials';
import { selectToken } from '../../../features/Login/tokenSlice';
import { useNavigate } from 'react-router-dom';
import { store } from '../../../app/store';

export default function LoginForm(props) {
    const navigate = useNavigate();
    const inputStyle = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    const labelStyle = "block text-gray-700 text-sm font-bold mb-2"

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginButtonClick = () => {
        loginUser(loginUserCredentials(email, password));
        // console.log(store.getState());
        // if (selectToken()) {
        //     navigate('/');
        // }
    }

    const formPreventDefault = (e) => {
        e.preventDefault();
        if (e.key === "Enter") {
            loginButtonClick();
        }
    }

    return (
        <form onSubmit={formPreventDefault} onKeyUp={formPreventDefault}>
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <div className="mb-4">
                <Label
                    className={labelStyle}
                    for="email"
                    label="Email:"
                />

                <InputField
                    className={inputStyle}
                    id="email"
                    type="text"
                    placeholder="Enter your email:"
                    setState={setEmail}
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
                    setState={setPassword}
                />
            </div>

            <div className="flex items-center justify-between">
                <Button button="Sign in"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={loginButtonClick}
                />
            </div>
        </form>
    )
}