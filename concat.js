//using Concat() for adding two or more string 
//first method
const name1='abid';
const last='nabid';
// const fullName=name1+last;
// console.log(fullName);//out:abidnabid.there is no space

const fullName=name1+' '+last;
// console.log(fullName);//out:abid nabid.using space between two +' '+ sign

//using concat
const fullName2=name1.concat(last);
// console.log(fullName2);//out:abidnabid. there is no space

const fullName3=name1.concat(' ').concat(last);
console.log(fullName3);//out:abid nabid

//using include() for knowing any specific letter is here or not
console.log(fullName3.includes('b'));//out:true

