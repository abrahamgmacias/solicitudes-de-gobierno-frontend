import LoginForm from '../UI/organisms/LoginForm';
import LeftArrow from '../UI/atoms/LeftArrow';
import Card from '../UI/atoms/Card';
import { useNavigate } from 'react-router-dom';

export default function LoginPage(props) {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(-1);
    }

    return (
        <div className="bg-gray-100 min-h-screen flex items-start justify-center">
            <br></br>
            <Card className="bg-white p-8 rounded shadow-md w-80 mt-5" render={() => (
                <div>
                    <LeftArrow className="cursor-pointer flex justify-end" onClick={handleClick} text="Go back &larr;"/>
                    <LoginForm/>
                </div>
            )}/>
        </div>
    );
};