
function shopCart(){
    const cartArray= Array.from(arguments)
    let sum=cartArray.reduce(function(acc,curr){
        return acc+curr;
    }, 0)
    console.log(`The total cart value is : ${sum}`)
    
}
shopCart(125,20,30);

// Same program Method 2 
/*
function calculater(){
    let sum=0;
    for(let i=0; i<arguments.length; i++){
        sum+=arguments[i];
    }
    console.log(sum)
    return sum
}
calculater(58,75,25,85)
*/
//Same program Method --3
/*
function calculater(...number){
    const cart=Array.from(number)
    let total= cart.reduce(function(acc,curr){
        return acc+curr;
    },0)
    console.log(`The total cart value is ${total}`)
}
calculater(852,856,85,8)
*/