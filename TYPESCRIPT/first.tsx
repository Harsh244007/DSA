const a: string = "ahgs";
type gender = string | null;
type person = {
  name: string;
  age?: number;
  gender?: gender;
  alive: boolean;
  [key: string]: any;
};
const chris: person = {
  age: 20,
  gender: null,
  name: "harsh",
  alive: true,
};

const sunny: person = {
  name: "sunny",
  alive: true,
};

interface person2 {
  name: string;
  age?: number;
}
const user: person2 = {
  name: "harsh",
  age: 20,
};

//array
const array = [1, 2, 3, 4, 5, 6];
//typescript inferance it checkec array and set as
// array.push("6");

const array2: (string | number)[] = [1, 2, 3, 4, 5, 6];
//typescript inferance it checkec array and set as
array2.push("6");

//functions
//function add (a,b)
function add(a: string, b: string): string {
  return a + b;
}

add("1", "2");
//void keyword if no return

function log(message: string):void {
  return console.log(message);
}
log("hello");
log("123");


//generics when you don't know what you will return but you will return something

function returnData(data:number[]):number[]{
    return new Array().concat(data)
}

returnData([1,2,3])


function returnData2<T>(data:T[]):T[]{
    return new Array().concat(data)
}

returnData2([1,2,3])

returnData2([1,2,"3"])
returnData2([1,2,"3"])