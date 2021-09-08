// Alternative for if and else statements

// Admin = get full access
// SubAdmin = create. update , delete products and receive orders
// Customer Care = Customer Services
// users = view and order products

var user = "customerCare"
var access;

switch (user) {
    case "admin":
        console.log("Welcome Moyo, You have full access")
        break;
    case "subAdmin":
        console.log("Welcome Sub-Admin, you can create. update , delete products and receive orders")
        break;
        case "customerCare":
           if(access == undefined){
               console.log("I am great!")
           } else{
               console.log("Fuck off!")
           }
            break;
    default:
        console.log("Sorry, we don't recognize you")
        break;
}




