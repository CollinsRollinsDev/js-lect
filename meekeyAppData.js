// Variables In JS
//  var, let and const


var firstName = "Collin"
var lastName = "Rollins";
var email = "collinsrollins07@gmail.com";
var password = "hackin";
var confirmPassword = "hacking";
var referral = true;
var initialDeposit = 5000;

// if(firstName == "Collins"){
//     if(lastName == "Rollins"){
//         if(email == "collinsrollins07@gmail.com"){
//             if(password == confirmPassword){
//                     if(referral){
//                         console.log(`Welcome to MEEKEY CONCEPT....your initial deposit is now ${initialDeposit + 1500}`)
//                     } else{
//                         console.log(`WELCOME TO MEEKEY CONCEPT....Your initial deposit is ${initialDeposit}`)
//                     }
//             } else{
//                 console.log("Your password does not match")
//             }

//         } else{
//             console.log("Please use the right email address.")
//         }`

//     } else{
//         console.log("Sorry, you are not the Collins we were expecting")
//     }

// } else{
//     console.log("Not Accessible to you");
// }

// if(firstName == "Collins" && lastName == "Rollins" && email == "collinsrollins07@gmail.com" && password == confirmPassword){
//     if(referral){
//          console.log(`Welcome to MEEKEY CONCEPT....your initial deposit is now ${initialDeposit + 1500}`)
//      } else{
//             console.log(`WELCOME TO MEEKEY CONCEPT....Your initial deposit is ${initialDeposit}`)
//         }
// } else{
//     console.log("Sorry, something went wrong")
// }

if(password == confirmPassword || firstName == "Collins"){
    console.log("Successful")
} else{
    console.log("Failed")
}