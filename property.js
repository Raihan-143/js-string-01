/**
 * object theke like wise object console korar jonno properties use hoy
 * In this properties there are two method
 * 1 is Dot notation & another 1 is Brakcet notation
 */

const person={
    name:'sodor ali',
    age:25,
    profession:'developer',
    salary:25000,
    married:true,
};
//methode one Dot notation
console.log(person.salary);//out:25000
//tobe onno vabeo lekha jai
const income=person.salary;
console.log(income);//out:25000

//methode 2 Dot notation
console.log(person['salary']);//out:25000
//onno vabe
const income2=person['salary'];
console.log(income2);//out:25000

//Note:tobe sob khetre Dot methode use kora jaina karon straigh key chara onno kono kicu te Dot methode kaj kore na
const persone2={
    'fav person':'jomir uddin',
}
// console.log(persone2.'fav person')//out: error
console.log(persone2['fav person']);//out: jomir uddin
