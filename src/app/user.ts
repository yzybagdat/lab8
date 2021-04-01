export class User {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  email: string;
  age: number;

  // constructor() {
  //
  // }
  //
  // constructor(id:number,
  //             name: string,
  //             age: number) {
  //   this.id=id;
  //   this.name=name;
  //   this.age=age;
  // }

  constructor(id:number,
              firstname: string,
              lastname: string,
              email: string,
              age: number) {
    this.id=id;
    this.firstname=firstname;
    this.lastname=lastname;
    this.email=email;
    this.age=age;
  }
}
