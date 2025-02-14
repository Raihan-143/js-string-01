// const school='Orchid School And College';
// console.log(school);//out:Orchid School And College
// console.log(school.toLowerCase);//out:orchid school and college


//compare
// const subject='physics';
// const book='Pysics';
// if(subject===book){
//     console.log("poira fatai felbo");
// }else{
//     console.log("khaya ghumai thakbo");//out:khaya ghumay thakbo bcz one is upper and other is lower
// }
// const subject='physics';
// const book='Physics';
// if(subject.toLowerCase() === book.toLowerCase()){
//     console.log("poira fatai felbo");//out:poira fatai felbo
// }else{
//     console.log("khaya ghumai thakbo");
// }

//using trim() for out the before and after space
// const drink='water ';
// const liquid=' water ';
// if(drink===liquid){
//     console.log("panir upor nam jibon");
// }else{
//     console.log("pani khwar moto na");//out:pani kawar moto na .giving this output bcz they have different space
// }

const drink='water ';
const liquid=' water ';
if(drink.trim()===liquid.trim()){
    console.log("panir upor nam jibon");//out:panir upor nam jibon
}else{
    console.log("pani khwar moto na");
}

