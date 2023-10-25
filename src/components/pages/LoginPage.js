import LoginForm from '../UI/organisms/LoginForm';
import Navbar from '../UI/molecules/Navbar';
import Card from '../UI/atoms/Card';


export default function LoginPage(props) {
    return (
        // factor last div
        <div>
            <Navbar></Navbar>
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <Card className="bg-white p-8 rounded shadow-md w-80" render={() => (
                    <LoginForm></LoginForm>
                )}>
                </Card>
            </div>
        </div>

    );
};