const mobile={
    brand:'samsung',
    price:25000,
    color:'black',
    camera:'12mp',
    isNew:true,
}
//using in: object keys
for(const prop in mobile){
    console.log(prop);
    /**out:brand
    price
    color
    camera
    isNew */
}

//for showing keys + values 
const keys=Object.keys(mobile);
console.log(keys);//out:[ 'brand', 'price', 'color', 'camera', 'isNew' ]
for(const key of keys){
    console.log(key, ':',mobile[key]);
    /**
     * out:brand : samsung
price : 25000
color : black
camera : 12mp
isNew : true
     */
}