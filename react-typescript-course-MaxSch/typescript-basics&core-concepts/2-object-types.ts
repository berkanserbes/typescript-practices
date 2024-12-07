type User = {
    id?: number | string,
    name: string, 
    age: number, 
    isAdmin: boolean
}

const user : User = {
    name: "Max",
    age: 34, 
    isAdmin: true
}

const user2: object = {
    name: "Dx",
    age: 25, 
    isAdmin: true
}

let customUser : {
    name: string;
    age: number;
    isAdmin: boolean;
    id: number | string;
};


customUser = {
    name: "Max",
    age: 32,
    isAdmin: true,
    id: 1
}