const college={
    name:'vnc',
    class:['11','12'],
    events:['science fair','bijoy dibosh','21 Feb'],
    unique:{
        color:'blue',
        result:{
            gpa:5,
            merit:'top',
        }
    }
}
// console.log(college);
/**
 * out:{
  name: 'vnc',
  class: [ '11', '12' ],
  events: [ 'science fair', 'bijoy dibosh', '21 Feb' ],
  unique: { color: 'blue', result: { gpa: 5, merit: 'top' } }//unique & resule eivabe dekhanor karon holo tara object
}
 */

//unique & result er value extra vabe dekhar jonno 
console.log(college.unique.color);//out:blue

//abar result theke kono value dekhar jonno
 console.log(college.unique.result.merit);//out:top
 
//amara chaile value change o korte pari
college.unique.result.merit='top top top most';
console.log(college.unique.result.merit);//out:top top top most

//kono kicu delete korte chaile
delete college.class;
console.log(college);
/**
 * out:{
  name: 'vnc',
  events: [ 'science fair', 'bijoy dibosh', '21 Feb' ],
  unique: { color: 'blue', result: { gpa: 5, merit: 'top top top most' } }
}

 */