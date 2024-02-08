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
