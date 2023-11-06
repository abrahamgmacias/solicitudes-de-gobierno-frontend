

export function checkDashboardOptions(role) {
    const optionDict = {
        'Mis solicitudes': "/mis-solicitudes",
        "Solicitudes cerca de mi": "solicitudes-cercanas", 
        "Crear solicitudes": "/crear-solicitud"
    };

    const entries = Object.entries(optionDict);

    switch (role) {
        case 'admin':
            return true;
        case 'employee':
            return entries.slice(0, 2);
        default:
            return entries.slice(0, 1);
    }
}