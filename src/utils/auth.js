

export function checkDashboardOptions(role) {
    const optionDict = {
        'Mis solicitudes': "/mis-solicitudes",
        "Solicitudes cerca de mi": "solicitudes-cercanas", 
        "Crear solicitudes": "/crear-solicitud"
    };

    

    const entries = Object.entries(optionDict);
    console.log(entries[1])

    switch (role) {
        case 'superadmin':
            return true;
        case 'admin':
            return true;
        case 'employee':
            return entries.slice(0, 2);
        default:
            return [entries[1]];
    }
}