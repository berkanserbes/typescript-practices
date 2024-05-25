interface ICredential {
  password: string;
  email: string;
}

/*
// Also, you can redefine the interface ICredential to include userName
interface ICredential {
  userName: string;
}
*/

interface IUserName {
  userName: string; 
}

class AuthCredential  implements ICredential {
  password: string; // from ICredential
  email: string;    // from ICredential
  userName: string;
  constructor(password: string, email: string, userName: string) {
    this.password = password;
    this.email = email;
    this.userName = userName;
  }
}


function login(credentials: ICredential & IUserName) : void {
  console.log(`Email: ${credentials.email}, Password: ${credentials.password}`, `Username: ${credentials.userName}`);
}

login(new AuthCredential("test123", "test@example.com", "testUser"))