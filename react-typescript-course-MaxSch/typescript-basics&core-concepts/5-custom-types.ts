type MultiplyFunctionType = (a: number, b: number) => number; 
type CallbackFunctionType = (a: number, b: number) => number;
type CalculateFunctionType = (a: number, b:number, callback: CallbackFunctionType) => void;


const multiply : MultiplyFunctionType = (a: number, b: number) : number => {
    return a * b;
}

const calculateNumber : CalculateFunctionType = (a: number, b: number, callback: CallbackFunctionType) => {
    callback(a, b);
}