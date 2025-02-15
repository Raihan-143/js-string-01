/**
 * problem:Give an array of product names,remove duplicates while preserving the 
 * original order. Use a loop to achieve this without designing a function.
 * 
 */

const products=['laptop','mobile','laptop','mobile','tablet'];
let uniqueProducts=[];
for(let i=0; i<products.length;i++){
    const element=products[i];
    if(!uniqueProducts.includes(element)){
        uniqueProducts.push(element);
    }
}
console.log(uniqueProducts);//out:[ 'laptop', 'mobile', 'tablet' ]