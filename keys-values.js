/**
 * object.keys & object.values using only for knowing the 
 * how many or showing the keys and values 
 */

const computer={
    brand:'lenovo',
    price:65000,
    processor:'intel',
    hdd:'512gb',
    monitor:'hp',
}
//showing for keys
const keys=Object.keys(computer);
console.log(keys);//out:[ 'brand', 'price', 'processor', 'hdd', 'monitor' ]
//showing for values
const values=Object.values(computer);
console.log(values);//out:[ 'lenovo', 65000, 'intel', '512gb', 'hp' ]