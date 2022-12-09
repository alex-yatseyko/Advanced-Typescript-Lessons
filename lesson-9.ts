// Ensure Initialization of Class Instance Properties in TypeScript

class User {
  //   userName: string | undefined;
  //   userName = "n/a";
  userName!: string;

  constructor(username: string) {
    // this.userName = username;
    // this.setUsername(username);
    this.initialize(username);
  }

  private initialize(username: string) {
    this.userName = username;
  }

  //   setUsername(username: string) {
  //     this.userName = username;
  //   }
}

const USER = new User("Alex Yatseyko");
// USER.setUsername("TestUser");

// const username = USER.userName?.toLowerCase() ?? "n/a";
const username = USER.userName?.toLowerCase();
console.log(`Username ${username}`);
