import Navbar from '../molecules/Navbar'


export default function DashboardEmployee() {
    return (
        <div>
            <Navbar loginButtons={true} />
            <p>Welcome employee</p>
        </div>
    )
}