import Button from '../atoms/Button';
// import LoginPage from '../../pages/LoginPage';
import { Link } from 'react-router-dom';
// import { url } from '../../../requests/url';

export default function Navbar(props) {
    const buttonStyle = "bg-white text-green-500 hover:bg-green-100 hover:text-green-600 font-medium py-2 px-4 rounded"

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
                                onClick={null}
                            />
                        </Link>

                        <Button
                            className={buttonStyle}
                            button="Register"
                        />
                    </div> : null}

            </div>
        </nav>
    )
}