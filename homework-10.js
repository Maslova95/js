// 
let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob",
  };
  
  let { first: f, third: x, fifth = "Name №5" } = names;
  
  console.log(f); // "Tom"
  console.log(x); // "Ray"
  console.log(fifth); // "Name №5"
  
//   2

let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
  };
  
  let { names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4] } = data;
  
  console.log(name2); // "Tom"
  console.log(age2); // 24
  console.log(name4); // "Bob"
  console.log(age4); // 26
  