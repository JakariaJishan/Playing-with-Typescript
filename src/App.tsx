let myStr: string;
myStr = "23";

let myNum: number;
myNum = 23;

let arr = ["jack", "john"];
arr.push("string");

let arrType: number[];
arrType = [34, 23];

let arrUnion: (number | string)[];
arrUnion = ["jack", 32];

let obj = {
  name: "jack",
  age: 23,
};
obj.age = 33;
// obj.color = 'red'

let objType: {
  name: string;
  age: number;
  phone?: string;
};

objType = {
  name: "jack",
  age: 32,
};

let anyType: any[];
anyType = [23, "jack", true];

// functions

let myFunc = (a: number, b: number): number => {
  console.log("hello");
  return a + b;
};
myFunc(23, 22);

// type alias

type UserType = {
  name: string;
  age: number;
  phone?: string;
};

let getUser = (user: UserType) => {
  console.log(user.name);
};
// function alias
type funcType = (a: number, b: string, c?: number) => void;

let myFunc2: funcType = (num, str) => {
  console.log(num, str);
};
myFunc2(23, "ddf", 23);
// object alais
type objectType = {
  name: string;
  age: number;
  theme: "dark" | "light";
};

let myObject: objectType = {
  name: "jack",
  age: 32,
  theme: "light",
};

// Interfaces
interface IUser {
  name: string;
  email: string;
  age: number;
}

interface IEmployee extends IUser {
  employeeId: number;
}

let employee: IEmployee = {
  name: "jack",
  email: "jack@gmail.com",
  age: 23,
  employeeId: 1,
};
let client: IUser = {
  name: "jack",
  email: "jack@gmail.com",
  age: 23,
};
// generics

let addId = <T,>(obj: T): T => {
  return { ...obj, id: 1 };
};

let data = {
  name: "jack",
  age: 23,
};

addId(data);
