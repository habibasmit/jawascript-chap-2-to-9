 /* chapter 6  to  9
Math expression */


// Question #01
// var a = 10;
// document.write("The value of a is : "+a)
// document.write("<br>")
// a++;
// document.write("The value of ++a is : " + a)
// document.write("<br>")
// document.write("Now the value of a is : "+ a)
// document.write("<br>")
// document.write("The value of a++ is : " + a)
// document.write("<br>");
// a++;
// document.write("The value of a++ is : " + a++)
// document.write("<br>") 
// a--;
// document.write("The value of a-- is : " + --a)
// document.write("<br>")
// document.write("Now the value of --a is : "+ a--)
// document.write("<br>")
// a++;
// document.write("The value of --a is :" + a++)
// document.write("<br>")
// a--;
// document.write("Now the value of --a is : " + --a);


// Question no #02
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// /* Explain the output at each stage:
//  --a;
//  --a - --b;
//  --a - --b + ++b;
//  --a - --b + ++b + b--; */

// var a = 2, b = 1;
// document.write("The value of a is: " + a + " ");
// document.write("The value of b is: " + b + " ");
// var result = --a - --b + ++b + b--;
// /*  --a = 1
//  --a - --b = 1-0 = 1
//  --a - --b + ++b = 1-0+1 = 1+1 = 2
//  --a - --b + ++b + b-- = 1-0+1+1 = 1+1+1 = 3 */
// document.write("The result is: " + result + " ");


// Question no #03
// var userName = prompt("Enter your name");
// document.write("<p>Hello, " + userName + "! Welcome to my Portfolio.");

// Question no #04 
// var tableNum = +prompt("Enter a number for the multiplication table (default is 5):") || 5;
// var counter = 1;
// var incre = 1;

// document.write(tableNum + " x " + counter + " = " + tableNum * incre + "<br>" +
//     tableNum + " x " + ++counter + " = " + tableNum * ++incre + "<br>" +
//     tableNum + " x " + ++counter + " = " + tableNum * ++incre + "<br>" +
//     tableNum + " x " + ++counter + " = " + tableNum * ++incre + "<br>" +
//     tableNum + " x " + ++counter + " = " + tableNum * ++incre + "<br>" +
//     tableNum + " x " + ++counter + " = " + tableNum * ++incre + "<br>" +
//     tableNum + " x " + ++counter + " = " + tableNum * ++incre + "<br>" +
//     tableNum + " x " + ++counter + " = " + tableNum * ++incre + "<br>" +
//     tableNum + " x " + ++counter + " = " + tableNum * ++incre + "<br>" +
//     tableNum + " x " + ++counter + " = " + tableNum * ++incre + "<br>");


// Question no #05
// var sub1 = prompt("Enter the first subject:");
// var sub1ObtMarks = +prompt("Enter the obtained marks of " + sub1 + ":");
// var sub2 = prompt("Enter the second subject:");
// var sub2ObtMarks = +prompt("Enter the obtained marks of " + sub2 + ":");
// var sub3 = prompt("Enter the third subject:");
// var sub3ObtMarks = +prompt("Enter the obtained marks of " + sub3 + ":");
// var totalObtMarks = sub1ObtMarks + sub2ObtMarks + sub3ObtMarks;

// var maxMarks = 100;
// var totalMarks = maxMarks * 3;

// var percentageSub1 = (sub1ObtMarks / maxMarks) * 100;
// var percentageSub2 = (sub2ObtMarks / maxMarks) * 100;
// var percentageSub3 = (sub3ObtMarks / maxMarks) * 100;
// var totalPercentage = ((percentageSub1 + percentageSub2 + percentageSub3) / 3);

// document.write("<table border='1'>");
// document.write("<tr>");
// document.write("<td>SUBJECT</td>");
// document.write("<td>OBTAINED MARKS</td>");
// document.write("<td>TOTAL MARKS</td>");
// document.write("<td>PERCENTAGE</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>" + sub1 + "</td>");
// document.write("<td>" + sub1ObtMarks + "</td>");
// document.write("<td>" + maxMarks + "</td>");
// document.write("<td>" + percentageSub1.toFixed(2) + " %</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>" + sub2 + "</td>");
// document.write("<td>" + sub2ObtMarks + "</td>");
// document.write("<td>" + maxMarks + "</td>");
// document.write("<td>" + percentageSub2.toFixed(2) + " %</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>" + sub3 + "</td>");
// document.write("<td>" + sub3ObtMarks + "</td>");
// document.write("<td>" + maxMarks + "</td>");
// document.write("<td>" + percentageSub3.toFixed(2) + " %</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td> </td>");
// document.write("<td>" + totalObtMarks + "</td>");
// document.write("<td>" + totalMarks + "</td>");
// document.write("<td>" + totalPercentage.toFixed(2) + " %</td>");
// document.write("</tr>");
// document.write("</table>");


/*    chapter 6  to  9  complete     */