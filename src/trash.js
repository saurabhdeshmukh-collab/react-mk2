// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler





function classic(a) {
  console.log(arguments); 
}

const func = (a) => {
    console.log(arguments);
}
console.log(classic(1,2,3));
console.log(func)(1,2,3);