// 1-Basic types
let number : number = 5;
//number = '5'  // It will give a error:  Type 'string' is not assignable to type 'number'.

let userName : string = "Berkan";
let isActive : boolean = true;
let x : any = "Any type";
x = false;

let charArray : string[] = ["A", "B", "C", "D"];
//charArray.push(3) // It will give you a error: Argument of type 'number' is not assignable to parameter of type 'string'.
let numberArray : number[] = [1, 2, 4, 5];
let anyArray : any[] = ["A",1,false, ["B", 2, true]];

// 2 - Tuples
let person : [number, string, boolean] = [1, "1", true]
//let person : [number, string, boolean] = [1, "1", true, false]; // Type '[number, string, true, boolean]' is not assignable to type '[number, string, boolean]'. Source has 4 element(s) but target allows only 3
let employee : [string, number][] = [["Berkan", 1], ["IBR", 2]];


// 3 - Unions
let id : string | number = "1" || 1;

// 4 - Enums
enum Months {
    January = "January", // Default value is 0
    February = "February",  
    March = "March",
    April = "April",
    May = "May"
}

enum Directions {
    Left = 1, 
    Up,
    Right, 
    Down
}

// 5 - Objects
const user : { pid: number, userName: string } = {
    pid: 1,
    userName: "Berkan" 
}

type Product = {productName : string, productNumber : number}

const product : Product = {
    productNumber: 1,
    productName : "Laptop"
}

// 6 - Type Assertions
let c : any = 1;
let customerId = <number>c; // Alternative way: let customerId =  c as number
customerId  = 2;


// 7 - Functions
const addNum  = (x : number, y : number) : number => x + y;
const message = (msg : string) : void => console.log(msg);

// 8 - Interfaces
//interface IUnions = string | number  // That's not going to work

interface ISubProduct {
    readonly referenceId : number,
    mainProductReferenceId : number,
    subProductName : string,
    quantity? : number
}

const subProduct : ISubProduct = {
    referenceId : 1,
    mainProductReferenceId: 10,
    subProductName : "SubProduct 1"
}

// 9 - Interface with Functions
interface IMathFunc {
    (x : number, y : number) : number 
}

const multiplyNumbers : IMathFunc = (num1 : number, num2 : number) : number => num1 * num2;
const divideNumbers : IMathFunc = (num1 : number, num2 : number) : number => num1 / num2;

// 10 - Classes

//interface IPerson {id: number, name: string, login() : string}

class Person {  // Also you can add an interface to class like this: class Classname implements InterfaceName
    id: number  // Data Modifiers: default modifiers is public but can change with protected or private  like this --> private id : number
    name: string

    constructor(id : number, name : string) {
        this.id = id,
        this.name = name
        console.log(`user ${id} is created`);
    }

    login() {
        return `${this.id} - ${this.name} succesfully logged in.`
    }
}

const person1 = new Person (1, "Berkan");
const person2 = new Person (2, "Lee");

console.log(person1.login());

class SuperPerson extends Person {
    skills : string[]

    constructor(id: number, name: string,skills: string[]) {
        super(id, name);
        this.skills = skills

        console.log(`${this.id}-${this.name}: ${this.skills}`)
    }
}

const superPerson1 = new SuperPerson(999, "Berkan", ["Coding", "Fitness"]);

// Generics
function getArray<T> (...items: T[]) : T[] {
    return new Array().concat(items)
}

const arr1 = [1,2,3,4,5];
const arr2 = [1, 'A', 2, 'B'];

const result = getArray(arr1, arr2);
console.log(result)  // [ [ 1, 2, 3, 4, 5 ], [ 1, 'A', 2, 'B' ] ]

const result2 = getArray<number[]>(arr1,[6,7,8]);
console.log(result2)


// -- Commands --
// tsc --watch index  --> hot reload watching given file 
// tsc --init --> create tsconfig.json file