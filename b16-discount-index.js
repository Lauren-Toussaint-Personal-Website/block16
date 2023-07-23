
// "timmy",  
// prescription: "acetaminophen", 
// pricePerRefill: 25, 
// refills: 3,
// subscription: false,
// coupon: true,
// }
// ;
// {
// customer = "sarah",
// prescription: "diphenhydramine",
// pricePerRefill: 50,
// refills: 1,
// subscription: true,
// coupon: false,
// }
// ;

// {
// customer = "rocky",
// prescription: "phenylephrine",
// pricePerRefill: 30,
// refills: 5,
// subscription: true,
// coupon: true,

// }
// }





const timmy = {
    prescription: "acetaminophen", 
    pricePerRefill: 25, 
    refills: 3,
    subscription: false,
    coupon: true,
    name: 'timmy'
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
    name: 'rocky'
    }
    
    
    const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
    
    }
/*
Steps:
1. total cost 
2. total discounts
2.a. subscription
2.b. coupons
3. grand total = total cost - discounts
*/
const totalInfo = (customer) => console.log(customer);
//customer => applyCoupon
// => totalCostPostSub => totalCost
const totalCost = (customer) => customer.pricePerRefill * customer.refills;
const totalCostPostSub = (customer) => {
    const cost = totalCost(customer)
    return cost - (customer.subscription ?  .25 * cost : 0)
 } 
const calculateGrandTotal = (customer) => {
    const customerSubscription = totalCostPostSub(customer) //  totalCost(timmy) => 75
    return customer.coupon ? customerSubscription - 10 : customerSubscription
}

console.log(`Your grand total is ${calculateGrandTotal}`)// const addFunction = ()
//const addFunction = (num1, num2) => {
//     return num1 + num2 
// }
// const functionNameHere = (parameters) => do stuff with paramaters
// addFunction(5, 5)
//totalCost = price before discount per customer    

// }
// console.log(total);
// console.log(customer.subscription true ? .25 * customer.refills * customer.pricePerRefill : customer.refills * customer.pricePerRefill)
// console.log(totalInfo(rocky));
console.log(totalCost(sarah));
// console.log(totalCost(timmy));
// console.log('total discount', totalDiscount(timmy));// // declare coupon function that takes in a customer object
// // if customer has coupon, return 10
// // else, return 0

// console.log(customer.coupon true ? customer.refills * customer.pricePerRefill - 10 : customer.refills * customer.pricePerRefill);

// // declare totalCost function
// // calculate total cost
// // return total cost - subscription discount - coupon discount

// console.log(`Your grand total is $${(customer.refills * customer.pricePerRefill - subscription(customer) - coupon(customer))}`;

// console.log(totalCost(timmy));
// console.log(totalCost(sarah));
// console.log(totalCost(rocky));