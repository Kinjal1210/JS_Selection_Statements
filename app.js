

 let myNumber = 9;
 let price = window.prompt("price")

 if (price < myNumber) {
  console.log("too low")
 }
 else if (price > myNumber) {
  console.log("too high")
 }
 else {
  console.log("Congratulations!!!");
 }

let birthMonth = window.prompt("What is your birth month?");

switch (birthMonth) {
  case "December": 
  case "January":
  case "February":
    console.log("winter");
    break;
  case "March":
  case "April":
  case "May":
    console.log("Spring");
    break;
  case "Jun":
  case "July":
  case "August":
    console.log("Summer");
    break;
  case "September":
  case "October":
  case "November":
    console.log("Fall");
    break;
    default:
    console.log("i don't recognize that month..");
}


let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";



switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
} 

switch (colorId) {
  case "BL":
    color = "Black";
    break;
  case "BU":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
      color ="White";
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
     size = "Extra Large";
     break;
  default:
     size = "One size fit All"

}

console.log(`Product: ${size} ${color} ${type}`);