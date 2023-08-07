// var fname: string = "harsh Hjh";
// var number: number = 87;
// var bool: boolean = false;
// voio null key
// var any: any = "67676";

// var doubleType: string | number = 87;

// doubleType.concat("jh")
// doubleType = 87;

// doubleType.concat("jh")
// console.log(typeof doubleType);
// any.push("|jh")
// doubleType.push(8)
// any = 678;

// fname;

// type interface
type genderc = string;
type hgxzcvb = {
  name: string;
  age?: number;
  gender: genderc;
};

const person: hgxzcvb = {
  name: "jaxghc",
  age: 20,
  gender: "male",
};

interface genderassad {
  gender: string;
}

interface hgxzcvb2 {
  name: string;
  age?: number;
  gender: [genderassad];
}

const person2: hgxzcvb2 = {
  name: "jaxghc",
  age: 20,
  gender: [{ gender: "male" }],
};

const arrayOne: (number | string)[] = [1, "2", 2, "4"];

// const arrayarray:[number,string,number,number] = [1,"2",2,"4"]

// arrayarray.push("r")
// arrayOne[3]="76"
// console.log(arrayarray.length)

arrayOne.push("8");

function addition(a: number, b: number = 9): number {
  return a + b;
}

function addition1(a: number, b: number): number {
    return a + b;
  }
console.log(addition(5, 8));
console.log(addition(5));
console.log(addition1(5, 8));
// console.log(addition1(5));

// promise type and interface diffrence
