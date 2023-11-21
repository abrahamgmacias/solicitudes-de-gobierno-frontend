import Button from '../atoms/Button';
import InputLabel from '../molecules/InputLabel';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { loginUser } from '../../../requests/apiCalls';
import { sampleRequest } from '../../../requests/credentials';
import { selectToken } from '../../../features/Login/tokenSlice';
import { useNavigate } from 'react-router-dom';


export default function LoginForm(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const isTokenAvailable = useSelector(selectToken);

    useEffect(() => {
        if (isTokenAvailable) {
            navigate('/');
        }
    }, [isTokenAvailable, navigate]);
 
    // Call the API
    const loginButtonClick = () => {
        console.log(
            sampleRequest(
                "POST",
                {
                    correo: email,
                    contrasena: password
                }
            )
        )

        loginUser(
            sampleRequest(
                "POST",
                {
                    correo: email,
                    contrasena: password
                }
            )
        );
    }

    const formPreventDefault = (e) => {
        e.preventDefault();
        if (e.key === "Enter") {
            loginButtonClick();
        }
    }

    return (
        <div>
            <form onSubmit={formPreventDefault} onKeyUp={formPreventDefault}>
                
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <InputLabel
                    for="email"
                    label="Email:"
                    id="email"
                    type="text"
                    placeholder="Enter your email:"
                    setState={setEmail}
                />

                <InputLabel
                    for="password"
                    label="Password:"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    setState={setPassword}
                />

                <div className="flex items-center justify-between">
                    <Button button="Sign in"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={loginButtonClick}
                    />
                </div>
            </form>

            
        </div>
    )
}