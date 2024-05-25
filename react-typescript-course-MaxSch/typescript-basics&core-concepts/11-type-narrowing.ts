function combine(a: number | string, b: number |string) {
    if(typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return `${a} - ${b}`
}


type User = {
    name: string;
    age: number;
};
   
type Admin = {
    name: string;
    age: number;
    permissions: string[];
};
   
/*  below code won't work because the User type does not exist once the code is compiled to JavaScript
function login(u: User | Admin) {
    if (typeof u === User) {
       // do something
    }
}
*/

// The solution is to use the in operator
function login(u: User | Admin) {
    if ('permissions' in u) {
      // do something
    }
  }
