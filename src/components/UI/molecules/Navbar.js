import Button from '../atoms/Button';
import { store } from '../../../app/store';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { clearToken, selectTokenValue } from '../../../features/Login/tokenSlice';

export default function Navbar(props) {
    const buttonStyle = "bg-white text-green-500 hover:bg-green-100 hover:text-green-600 font-medium py-2 px-4 rounded"
    const isTokenAvailable = useSelector(selectTokenValue);

    function logOut() {
        if (isTokenAvailable) {
            return store.dispatch(clearToken());
        }
    };

    return (
        <nav className="bg-green-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to={"/"}>
                    <p className="text-white text-xl font-medium font-helvetica">
                        Gestor de Solicitudes MX
                    </p>
                </Link>

                {props.loginButtons ?
                    <div className="flex space-x-4">
                        <Link to="/login">
                            <Button
                                className={buttonStyle}
                                button="Log In"
                            />
                        </Link>

                        <Button
                            className={buttonStyle}
                            button="Register"
                        />
                    </div>
                    : null
                }

                {props.logoutButtons ?
                    <div className="flex space-x-4">
                        <Link to="/">
                            <Button
                                className={buttonStyle}
                                button="Log Out"
                                onClick={logOut}
                            />
                        </Link>
                    </div>
                    : null
                }

            </div>
        </nav>
    )
}