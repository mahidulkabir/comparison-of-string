let school = "Lakshmipur adarsha samad govt. high school";

// console.log(school.split(''));
let reverse = '';
for (const letter of school){
    
    reverse = letter + reverse;
    
}
console.log(reverse);
let b='';
for (let i=0; i<school.length;i++ ){
    // console.log(i);
    let a = school[i];
     b = a + b;

}


console.log(b);