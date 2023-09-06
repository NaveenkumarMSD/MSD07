// // var age=26;
// // let name= "Naveen MSD";

// // if (age<25){
// //   console.log(" eligible for jobs");
// // }else if(age>25){
// //     console.log("not eligible for jobs");
// // }else{
// // console.log("last chance for jobs");
// // }


// // for(i=0;i<name.length; i++);
// // {
// //   console.log(name);
// // }

// // let g = 0;
// // while (age <= 30) {
// //     console.log(name);
// //     g++;
// // }

// // let j = 0;
// // do {
// //     console.log(name);
// //     j++;
// // } while (j<=27)


// pop



// ----------------------------------------------

let fruitNames=["apple","berries","cherry","orange","strawberris"];
//length

console.log(fruitNames.length);
console.log(fruitNames.length-1);

//pop
console.log(fruitNames.pop());
console.log(fruitNames.pop());
console.log(fruitNames.pop());
//push

fruitNames.push("grapes");
fruitNames.push("banana");
//slice

console.log(fruitNames);
console.log(fruitNames.slice(0,3));
//reverse

//console.log(fruitNames.reverse());
//unshift

fruitNames.unshift("berries");
fruitNames.unshift("cherry");
console.log(fruitNames);
//shift

fruitNames.shift();
fruitNames.shift();
console.log(fruitNames);
//concat

const fruitsNames=["papaya","kiwi","watermelon","mango"];
const allNames=fruitNames.concat(fruitsNames);
console.log(allNames);
 //include

 console.log(fruitsNames.includes("papaya"));
 console.log(fruitNames.includes("apple"));
 console.log(fruitsNames.includes("orange"));



