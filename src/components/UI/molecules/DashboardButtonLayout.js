import Button from '../atoms/Button';
import { useNavigate } from 'react-router-dom';
import { checkDashboardOptions } from '../../../utils/auth';

// Add role logic --- MAKE ANOTHER CONTAINER
export default function DashboardButtonLayout(props) {
    const buttonStyle = "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";
    
    // Check for dashboard opts based on role
    const optionsDict = checkDashboardOptions(props.role);

    const navigate = useNavigate();
    function handleClick(route) {
        navigate(route)
    }

    const buttons = optionsDict.map(([key, value]) => (
        <Button className={buttonStyle} button={key} 
                onClick={() => { handleClick(value) }}/>
    ));

    return (
        <div className="flex justify-center mt-4">
            <div className="space-x-2">
                {buttons}
            </div>
        </div>
    )
}