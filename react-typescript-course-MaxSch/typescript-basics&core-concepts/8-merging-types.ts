// Merging Types
type Admin = {
    permissions: Array<string>; // or string[]
}

type User = {
    userName : string;
}

type AppAdmin = Admin & User;

const appAdmin : AppAdmin = {
    userName: "Berkan",
    permissions: ["create", "read", "update", "delete"]
}

// Merging Interfaces
interface IAdmin {
    permissions: Array<string>;
}

interface IUser {
    userName : string;
}

interface IAppAdmin extends IAdmin, IUser {
    // also you can add additional properties
    role: string;
}