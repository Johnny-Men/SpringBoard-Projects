
// 8
// 1846
// {yearNeptuneDiscovered:1846, yearMarsDiscoved: 1659}
// 'Your name is Alejandro and you like purple'
// 'Your name is Melissa and you like green'
// 'Your name is undefined and you like green'
// 'Maya'
// 'Marisa'
// 'Chi'
// 'Raindrops on roses'
// 'whiskers on kittens'
// ['Bright copper kettles', 'warm woolen mittens', 'Brown
// paper packages tied up with strings']
// [10,30,20]
// let {numbers{a}}
let obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
let {numbers : {b}} = obj;
let {numbers : { a}} = obj;

let arr = [1,2];
[arr[0], arr[1]] = [arr[1], arr[0]];

let raceResults = ([first, second , third , ...rest]) => ({first,second,third,rest});
   
 
    
