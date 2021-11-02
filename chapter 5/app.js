// -----Math Expressions-----
//-----Ques#1
var num1 = 3
var num2 = 5
var num3 = num1 + num2
document.write("Sum of 3 and 5 is" + " " +num3)


// -----Ques#2
var num1 = 3
var num2 = 5
var num3 = num1 - num2
document.write("Sum of 3 and 5 is" + " " +num3)

var num1 = 3
var num2 = 5
var num3 = num1 / num2
document.write("<br>"+"Sum of 3 and 5 is" + " " +num3)

var num1 = 3
var num2 = 5
var num3 = num1 * num2
document.write("<br>"+"Sum of 3 and 5 is" + " " +num3 + "<br>")


// -----Ques#3
var value;
document.write("<br>" +"Valueafter variable declaration is;" + value +"<br>")
var num = 3
document.write("The value is"+ " "+ num + "<br>")
var initializeValue = 5
document.write("The initial value is"+" "+ initializeValue + "<br>")
var increement = ++initializeValue
document.write("Value after increement is" + " " +increement + "<br>")
var add = increement + 7
document.write("Value after addition" + " " +add + "<br>")
var decreement = --add
document.write("Value after Decreement" + " " +decreement + "<br>")
var percentage = 12 % 3
document.write("Value after remainder" + " " +percentage + "<br>")


// -----Ques#4

var filmTicket = 600 * 5
document.write("<br><br>"+"Total cost to buy 5 tickets is"+" "+ filmTicket + "PKR" +"<br></br>")


// -----Ques#5
// -----table 
for(var i = 1; i<=10; i++){
    document.write("2 X"+ " " + i + " " + "=" + 2*i + "<br>" )
}
// document.write("2 x 1 = 2 " + "<br>")
// document.write("2 x 2 = 4 " + "<br>")
// document.write("2 x 3 = 6 " + "<br>")
// document.write("2 x 4 = 8 " + "<br>")
// document.write("2 x 5 = 10 " + "<br>")
// document.write("2 x 6 = 12 " + "<br>")
// document.write("2 x 7 = 14 " + "<br>")
// document.write("2 x 8 = 16 " + "<br>")
// document.write("2 x 9 = 18 " + "<br>")
// document.write("2 x 10 = 20 " + "<br>")


// -----Ques#6
var c =40
var f = 98
var celcius = (f-32) * 5/9;
var fahranite = (c*9/5) + 32;
document.write("<br><br>"+celcius + "C " + "Is" + fahranite + "F" + "<br>")

var c =212
var f = 353
var celcius = (f-32) * 5/9;
var fahranite = (c*9/5) + 32;
document.write( fahranite + "F" + "Is" +celcius + "C " )


//Question 6

var tempCel = 25;
var tempFer = 70;
document.write("<br><br>The Temperature Converter<br><br>")
document.write("<br>"+tempCel+"°C "+"is "+((tempCel*9/5)+32)+"°F");
document.write("<br>"+tempFer+"°F "+"is "+((tempFer-32)*5/9)+"°C");

//Question 7

var head = "Shopping Cart"
var price1 = 650
var quant1 = 3
var price2 = 100
var quant2 = 7
var charges = 100;
var totalPrice = ((price1*quant1)+(price2*quant2)+charges);
document.write("<br><br>"+ head+"<br>");
document.write("<br>"+"Price of item 1 is "+ price1);
document.write("<br>"+"Quantity of item 1 is "+ quant1);
document.write("<br>"+"Price of item 2 is "+ price2);
document.write("<br>"+"Quantity of item 2 is "+ quant2);
document.write("<br>"+"Shipping Charges  "+ charges);
document.write("<br><br>"+"Total Cost of your order is "+ totalPrice +"<br><br>");



// -----Ques#8
//....MarkSheet
// var name = prompt("Enter Your Name");
// var age = prompt("Enter Your Age")
// var schoolName = prompt("Enter Your School Name");
// var classs = prompt("Enter Your class");
// var rollNumber = prompt("Enter Your roll number");
// var english = prompt("Enter Your English Marks");
// var urdu = prompt("Enter Your Urdu Marks");
// var islamiat = prompt("Enter Your Islamiat Marks");
// var math = prompt("Enter Your Maths Marks");
// var science = prompt("Enter Your Science Marks");
// var obtainedMarks = parseInt(english) + parseInt(urdu) + parseInt(islamiat) + parseInt(math) + parseInt(science); 
// var percentage = obtainedMarks * 100 / 500 ;

// document.write("Name:" + " " + name + "<br>");
// document.write("Age:" + " " + age + "<br>");
// document.write("School Name:" + " " + schoolName + "<br>");
// document.write("Class:" + " " + classs + "<br>");
// document.write("Roll Number:" + " " + rollNumber + "<br>");
// document.write("Obtained Marks:" + " " + obtainedMarks + "<br>");
// document.write("Percentage:" + " " + percentage + "<br>");



// -----Ques#9
var usdIntoPkr = 10 * 104.80
var riyalIntoPkr = 25 * 28 
var total = usdIntoPkr + riyalIntoPkr
document.write("total Currency INto pkr IS"+" "+total+ "<br><br>") 


// -----Ques#10
var number = 10;
var arthmetic = (number + 5 * 10) / 2
alert(arthmetic)


// -----Ques#11
var currentYear = parseInt(prompt("Enter current year"))
var dateOfBirth = parseInt(prompt("Enter date of birth"))
document.write("Current year is"+" "+currentYear+"<br>")
document.write("Your Date of Birth  is"+" "+dateOfBirth+"<br>")
document.write("Your age  is"+" ")
document.write(+currentYear - dateOfBirth)

//Question 12
var geomathead = "The Geometrizer";
var radius = 10
var circumFerence = (2*3.142*radius);
var areaBased = (3.142*(radius*radius));
document.write("<br><br>The Geometrizer<br>")
document.write("<br>Radius of a circle: " + radius);
document.write("<br>The circumference is: " + circumFerence);
document.write("<br>The area is: " + areaBased);

//Question 13
var scalhead = "The Lifetime Supply Calculator ";
var snack = prompt("Enter the name of your Favourite Snake");
var currentAge = parseInt(prompt("Enter Your Current Age"));
var maxAge = parseInt(prompt("Enter Your Max Age"));
var snackAmount = parseInt(prompt("Enter amount of your per day snacks"));
var totalTime = ((maxAge*currentAge)/snackAmount);
document.write("<br><br>" + scalhead + "<br>");
document.write("<br>Favourite Snack: " + snack);
document.write("<br>Current Age: " + currentAge);
document.write("<br>Estimated Max Age: " + maxAge);
document.write("<br>Amout of Snacks per day: " + snackAmount);
document.write("<br>You will need "+ totalTime + " " + snack + " to last you until the ripe old age of " + maxAge);