const sentence='I am learning a web dev';
//method 1
let reverse='';
for(const letter of sentence){
    reverse=letter+reverse;
}
// console.log(reverse);//out:ved bew a gninrael ma I

//method2
let rev='';
for(let i=0; i<sentence.length; i++){
    const letter=sentence[i];
    rev=letter+rev;
}
// console.log(rev);//out:ved bew a gninrael ma I

//shortcut method
const reversed=sentence.split('').reverse().join('');
console.log(reversed);//out:ved bew a gninrael ma I

