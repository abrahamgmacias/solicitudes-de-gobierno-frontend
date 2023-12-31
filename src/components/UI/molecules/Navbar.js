import Button from '../atoms/Button';
import { store } from '../../../app/store';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { clearRole } from '../../../features/Login/roleSlice';
import { clearToken, selectToken } from '../../../features/Login/tokenSlice';
import { clearFirstName, clearLastName } from '../../../features/User/userSlice';

export default function Navbar(props) {
    const buttonStyle = "bg-white text-green-500 hover:bg-green-100 hover:text-green-600 font-medium py-2 px-4 rounded items-center"
    const isTokenAvailable = useSelector(selectToken);

    function logOut() {
        if (isTokenAvailable) {
            store.dispatch(clearToken());
            store.dispatch(clearFirstName());
            store.dispatch(clearLastName());
            store.dispatch(clearRole());
        }
    };

    return (
        <nav className="bg-green-500 h-16 p-4 items-center">
            <div className="container mx-auto flex justify-between items-center">
                <Link to={"/"}>
                    <p className="text-white text-xl font-helvetica font-bold m-0 p-0">
                        Gestor de Solicitudes MX
                    </p>
                </Link>

                {props.loginButtons ?
                    <div className="flex space-x-4 items-center">
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
                    <div className="flex space-x-4 items-center">
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