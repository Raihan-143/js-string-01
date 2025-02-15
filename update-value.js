const person={
    name:'sodor ali',
    age:25,
    profession:'developer',
    salary:25000,
    married:true,
    'fav places':['kuyakata','sainmartin','bandarban'],
};
/**
 * Dot and Bracket methode use kore amra kono key er value update korte pari
 */
person.salary=30000;
person['age']=26;
person['fav places']=['maldives','bali','pataya'];

console.log(person);
/**
 * out:{
  name: 'sodor ali',
  age: 26,
  profession: 'developer',
  salary: 30000,
  married: true,
  'fav places': [ 'maldives', 'bali', 'pataya' ]
}
 */