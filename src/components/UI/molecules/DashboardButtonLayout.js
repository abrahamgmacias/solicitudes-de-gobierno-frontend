import Button from '../atoms/Button';

// Add role logic
export default function DashboardButtonLayout() {
    const buttonStyle = "bg-gray-400 border border-black px-6 py-2 hover:bg-gray-500 hover:text-white transition duration-300 ml-4 mt-4";
    const optionList = ['Mis solicitudes', 'Solicitudes cerca de mi']

    const buttons = optionList.map((text, index) => (
        <Button className={buttonStyle} key={index} button={text} />
    ));

    return (
        <div className="flex justify-center">
            <div className="space-x-2">
                {buttons}
            </div>
        </div>
    )
}