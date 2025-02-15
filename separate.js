/**
 * problem:Give an array of products. each with a category.Separate them into
 * two arrays.One for electronics and for clothing.Store the result in one object.
 */
const products=[
    {name:'laptop', category:'Electronics'},
    {name:'T-shirt', category:'Clothing'},
    {name:'Headphones', category:'Electronics'},
    {name:'Jeans', category:'Clothing'},

];
let categorizeProducts={
    electronics:[],
    clothing:[],
};
for(let i=0;i<products.length;i++){
    const singleProduct=products[i];
    if(singleProduct.category==='Electronics'){
        categorizeProducts.electronics.push(singleProduct.name);
    }else if(singleProduct.category==='Clothing'){
        categorizeProducts.clothing.push(singleProduct.name);
    }
}
console.log(categorizeProducts);
/**
 * out:{
  electronics: [ 'laptop', 'Headphones' ],
  clothing: [ 'T-shirt', 'Jeans' ]
}
 */
