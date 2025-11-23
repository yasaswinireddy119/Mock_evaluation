//question - 1
//spread operator
let arr1=[10,20,30]
let arr2 = [40,50]
const combined = [ ...arr1,
    ...arr2]
console.log(combined)


//question - 2
//spread operator
let person = { name: "Venu", age: 25 };
let extra = { city: "Bengaluru" };
const profile = {
    ...person , ...extra
}
console.log(profile)

//question - 3
//rest operator

function sumAll(){
    return sumAll.reduce({total , n => total + n , 0})

}
console.log(sumAll(1,2,3,4))

//question - 4
//nested object
let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};

//destructuring
let user={
    address:{city,geo:{lat,lng}}
}

console.log(city)
console.log(lat)
console.log(lng)

//question - 6
//arrow function
const multiply = (a,b) => {a * b}
console.log(multiply)

//questiom - 7
//optional chaining
let emp = {
  name: "Prakash",
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};
console.log(emp?.details?.profile?.role)