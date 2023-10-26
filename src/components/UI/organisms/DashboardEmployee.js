import Navbar from '../molecules/Navbar'
import { useSelector } from 'react-redux';
import { selectTokenValue } from '../../../features/Login/tokenSlice';

export default function DashboardEmployee() {
    const isTokenAvailable = useSelector(selectTokenValue);

    return (
        <div>
            <Navbar loginButtons={isTokenAvailable ? false : true} />
            <p>Welcome employee</p>
        </div>
    )
}