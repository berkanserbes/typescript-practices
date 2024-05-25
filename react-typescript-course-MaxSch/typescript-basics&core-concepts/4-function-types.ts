const add = (number1 : number, number2 : number) : number => {
    return number1 + number2;
}

const sayHello = (name: string) : void => {
    console.log(`Hello ${name}`);
} 

const sayHi = (name: string) : undefined => {  //you could technically use undefined as a return type, if the function doesn't return anything
    console.log(`Hi ${name}`);
} 

const calculate = (
    a: number, 
    b: number, 
    callback: (a: number, b: number) => number) => {
    callback(a,b);
}

console.log(calculate(10, 20, add));