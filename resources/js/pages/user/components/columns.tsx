import { ColumnDef } from "@tanstack/react-table";
import { UserModel } from "../form/userSchema";


export const columns: ColumnDef<UserModel, unknown>[] = [
    {
        "accessorKey": "name",
        "header": "Name"
    },
    {
        "accessorKey": "full_name",
        "header": "Full Name"
    },
    {
        "accessorKey": "email",
        "header": "Email"
    },
    {
        "accessorKey": "nric",
        "header": "NRIC"
    },
    {
        "accessorKey": "description",
        "header": "Description"
    },
    {
        "accessorKey": "address",
        "header": "Address"
    },
];
