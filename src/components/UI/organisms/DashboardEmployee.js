import Navbar from '../molecules/Navbar'
import { useSelector } from 'react-redux';
import { selectRole } from '../../../features/Login/roleSlice';
import { selectTokenValue } from '../../../features/Login/tokenSlice';
import { selectFirstName, selectLastName } from '../../../features/User/userSlice';
import DashboardButtonLayout from '../molecules/DashboardButtonLayout';


export default function DashboardEmployee() {
    const isTokenAvailable = useSelector(selectTokenValue);
    const firstName = useSelector(selectFirstName);
    const secondName = useSelector(selectLastName);
    const role = useSelector(selectRole);

    let welcomingStatement = "Bienvenido empleado... Inicia sesión";
    if (firstName && secondName) {
        welcomingStatement = `Bienvenido ${firstName} ${secondName}`;
    };

    return (
        <div>
            <Navbar loginButtons={isTokenAvailable ? false : true} logoutButtons={isTokenAvailable ? true : false} />
            <div className="container mx-auto flex justify-between items-center">
                <p class="mt-4 text-3xl">{welcomingStatement}</p>
            </div>

            <hr class="separator"></hr>

            <DashboardButtonLayout role={role} />

        </div>
    )
}