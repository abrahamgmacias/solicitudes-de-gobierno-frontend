import Navbar from '../molecules/Navbar'
import { useSelector } from 'react-redux';
import { selectTokenValue } from '../../../features/Login/tokenSlice';
import DashboardButtonLayout from '../molecules/DashboardButtonLayout';


export default function DashboardEmployee() {
    const isTokenAvailable = useSelector(selectTokenValue);

    return (
        <div>
            <Navbar loginButtons={isTokenAvailable ? false : true} logoutButtons={isTokenAvailable ? true : false} />
            <div className="container mx-auto flex justify-between items-center">
                <p class="mt-4 text-3xl">Welcome employee</p>
            </div>

            <hr class="separator"></hr>

            <DashboardButtonLayout />

        </div>
    )
}