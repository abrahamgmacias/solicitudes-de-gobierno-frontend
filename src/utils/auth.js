

export function checkDashboardOptions(role) {
    const optionDict = {
        'Libros': "libros",
        "Registrar un libro": "crear", 
    };

    const entries = Object.entries(optionDict);

    // Modify for when this changes
    switch (role) {
        case 'superadmin':
            return true;
        case 'admin':
            return true;
        case 'employee':
            return entries.slice(0, 2);
        default:
            return entries.slice(0, 2);;
    }
}