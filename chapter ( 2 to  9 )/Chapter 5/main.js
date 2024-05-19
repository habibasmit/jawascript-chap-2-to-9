  //  chapter No #05
  // MATH EXPRESSIONS

  // question 01
  var sum = "<h1>sum of 3 and 5 is</h1>"
var a = 3;
var b = 5;
document.write(sum + "Total : ")
document.write(a+b);


var substract = "<h1>substraction of 3 and 5 is</h1>"
var a = 5;
var b = 3;
document.write(substract + "Total : ")
document.write(a - b);



var multiply = "<h1>multiply of 3 and 5 is</h1>"
var a = 5;
var b = 3;
document.write(multiply + "Total : ")
document.write(a * b);
 

var divide = "<h1>divide of 3 and 5 is</h1>"
var a = 5;
var b = 3;
document.write(divide + "Total : ")
document.write(a / b);



var modulus = "<h1>modulus of 3 and 5 is</h1>"
var a = 5;
var b = 3;
document.write(modulus + "Total : ")
document.write(a % b);
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")

// ############ increment and decrement #############################

var a = "" 

document.write("Value after decleration is: ?")
document.write("<br>")
var b = 5
document.write("initialize value :"+b)
document.write("<br>");     
b++;
document.write("Value after increment is : " + b +a)
document.write("<br>")

var sum = 7;

document.write("Value after addition is : ")
document.write(7 + b)
document.write("<br>")

sum--;
document.write("Value after decleration is : ")
document.write(sum + b)
document.write("<br>")

var reminder = sum;

document.write("Value after reminder is : ")
document.write(reminder % sum)
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")



var ticket = 600;
document.write("Total cost to buy 5 ticket to a movie is : ")
document.write(ticket * 5 + " PKR")


// ############# table ################


var heading = "<h1>table of = 4</h1>"

document.write(heading);


var value = 4;
document.write("<ul>")
document.write("<li>"+value+ "x 1 = " +value*1 +"</li>")
document.write("<br>")
document.write("<li>"+value+ "x 2 = " +value*2 +"</li>")
document.write("<br>")
document.write("<li>"+value+ "x 3 = " +value*3 +"</li>")
document.write("<br>")
document.write("<li>"+value+ "x 4 = " +value*4 +"</li>")
document.write("<br>")
document.write("<li>"+value+ "x 5 = " +value*5 +"</li>")
document.write("<br>")
document.write("<li>"+value+ "x 6 = " +value*6 +"</li>")
document.write("<br>")
document.write("<li>"+value+ "x 7 = " +value*7 +"</li>")
document.write("<br>")
document.write("<li>"+value+ "x 8 = " +value*8 +"</li>")
document.write("<br>")
document.write("<li>"+value+ "x 9 = " +value*9 +"</li>")
document.write("<br>")
document.write("<li>"+value+ "x 10 = " +value*10 +"</li>")
document.write("</ul>")


var heading = "<h1>Shopping Cart</h1>"

document.write(heading)

var shirt = 650;

document.write("Price of item 1 is : " + shirt);
document.write("<br>")

var quantity1 = 3;

document.write("Quantity of item is : " + quantity1);
document.write("<br>")

var pant = 230;

document.write("Price of item is : " + pant)
document.write("<br>")

var quantity2 = 6;

document.write("Quantity of item is : "+ quantity2)


var sum = (pant*quantity2+shirt*quantity1);
document.write("<br>")

document.write("Total sum of your order is : "+sum + " PKR");


// ############## Mark Sheet ########################


var heading = "<h1>Mark Sheet</h1>"

document.write(heading);
document.write("<br>")
document.write("<br>")
document.write("<br>")

var total = 850;

document.write("Total marks : " + total);
document.write("<br>")



var obtained = 583;

document.write("Obtained Marks is : "+ obtained)
document.write("<br>")

var sum = (obtained / total * 100)

document.write("total percentage is : "+sum)
document.write("<br>")



// ######### Age Calculator ##################

var heading = "<h1>Age Calculator</h1>";
document.write(heading)
document.write("<br>")

var currentYear = 2024;
document.write("Current Year is :" + currentYear)
document.write("<br>")
var birthYear = 2001;
document.write("Birth Year is : "+ birthYear);
document.write("<br>")
var age = (currentYear - birthYear);

document.write("Your age is :" + age)
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")



// ################## Currency Exchange #############################
var heading  = "<h1>Currency Exchange</h1>";

document.write(heading);

var dollar = 285;
var riyal = 80;
var sum = (dollar, riyal);
    document.write("Total Currency in PKR :")
    document.write(dollar*10 + riyal*25)
    document.write("<br>")
    document.write("<br>")
    document.write("<br>")



    // ######################## exercise 10 ################################
    var heading = "<h1>exercise 10</h1>";
    document.write(heading)

    var a = 2;

    document.write(a+5*10/2);
    document.write("<br>");
    document.write("<br>")
    document.write("<br>")



// ########################### The life supply Calculator ###################################

var snack = "chocolate chip";
document.write("Favourite Snack :" + snack)
document.write("<br>")
var age = 23;
document.write("Current Age : " + age);
document.write("<br>")
var ageEstimated = 50;
document.write("Estimated MAximum Age : " + ageEstimated);
document.write("<br>")
var day = 5;
document.write("Amount of snack per day : " + day)
document.write("<br>")
var total = (age,day)