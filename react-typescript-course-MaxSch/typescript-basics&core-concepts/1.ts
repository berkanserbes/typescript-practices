// Basic primitive types
// string - number - boolean
let userName : string = "berkanserbes";
let cityPlate : number = 16;
let isLogin : boolean = false;

console.log(userName);

// any
let userID: any = "33";
userID = 33;

// onion type
let phoneNumber: number | string = "539.....14";
phoneNumber = 539;

// execute ts compiler with this command: npx tsc 1.ts
// or if you have ts compiler installed globally: tsc 1.ts