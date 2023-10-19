import Button from '../atoms/Button';

export default function Navbar(props) {
    const buttonStyle = "bg-white text-green-500 hover:bg-green-100 hover:text-green-600 font-medium py-2 px-4 rounded"

    // check if user is logged in

    return (
        <nav className="bg-green-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <p className="text-white text-xl font-medium font-helvetica">
                    Gestor de Solicitudes MX
                </p>
                <div className="flex space-x-4">
                    <Button
                        className={buttonStyle}
                        button="Log In"
                    />
                    <Button
                        className={buttonStyle}
                        button="Register"
                    />
                </div>
            </div>
        </nav>
    )
}