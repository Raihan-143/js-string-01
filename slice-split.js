const address='andorkilla';
const part=address.slice(2, 5);
// console.log(part);//out:dor. bcz samne theke 2 letter and last er 5 letter slice kore bad diye dise

//using split.jeti part bye part alada kore dei,abar nirdisto letter diye vag kiora jai
const sentence='I am a good hard working person';
// const friends=sentence.split(' ');
// console.log(friends);//out:[ 'I', 'am', 'a', 'good', 'hard', 'working', 'person' ]
const friends=sentence.split(' a ');
// console.log(friends);//out:[ 'I am', 'good hard working person' ]

//using join() for two string added
const realFriend=['jodu', 'modu', 'kodu', 'podu','lodu'];
console.log(realFriend.join('|'));//out:jodu|modu|kodu|podu|lodu
console.log(realFriend.join('-'));//out:jodu-modu-kodu-podu-lodu