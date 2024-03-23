export const RoleMapping = (role:string) => {
    let roleName: string;
    switch (role) {
        case "SU":
            roleName = "Super Admin"
            break;
        case "A":
            roleName = "Admin"
            break;
        case "MP":
            roleName = "Member Proyek"
            break;
        case "PJ":
            roleName = "PJ Proyek"
            break;
        default:
            roleName = "Pegawai"
            break;
    }

    return roleName;
}
export const RoleToRoleCode = (role:string) => {
    let roleName: string;
    switch (role) {
        case "Super Admin":
            roleName = "SU"
            break;
        case "Admin":
            roleName = "A"
            break;
        case "Member Proyek":
            roleName = "MP"
            break;
        case "PJ Proyek":
            roleName = "PJ"
            break;
        default:
            roleName = "P"
            break;
    }

    return roleName;
}
