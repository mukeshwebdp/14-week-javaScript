const productDetails ={
    name:"Apple 2020 MacBook Air Laptop",
    price: 82000,
    color: "Grey",
    hardDisk: "256 GB",
}
console.log(`Below are the product details.`)
    for(let item of Object.keys(productDetails)){
        console.log(`${item} : ${productDetails[item]}`)
    }