//-----Chap# VARIABLE NAMES: LEGAL & ILLEGAL---------
//------ques#1
// var name = "talha" , age = 21 , weight = 70;


//------ques#2

var heading = "Rules for naming JS variables\n"
document.write(heading);

var line1 = "var full name= talha"    //illegal1
var line2 = "var var = sad"           //illegal2
var line3 = "var name-full = mkl"     //illegal3
var line4 = "var 1name = Talha"       //illegal4
var line5 = " var !name = talha"      //illegal5  

var line6 = "var  name = talha"        //legal1
var line7 = "var name1 = talha"        //legal2
var line8 = "var fullNAme = HM TALHA"  //legal3
var line9 = "var naem_as = talha"      //legal4 
var line10 = "var $name = talha"       //legal5 


var line11 = "Variable names can only contain numbers, $ and _.For example $my_1stVariable.";
var line12 = "Variables must begin with a letter, $ and _.For example $name, _name or name.";
var line13 = "Variable names are case sensitive.";
var line14 = "Variable names should not be JS keywords.";

document.write("<br>"+line11 +"<br>"+ line12 +"<br>"+ line13 +"<br>"+ line14)

//------ques#3
// document.write("<h1>Rules for naming JS variables</h1>")
// document.write(" Variable names can only contain neumbers , and__ and for example smy _1st_variable. ,<br>")
// document.write("Variables must begin with a ______, ______ or_____. For example $name, _name or name<br>")
// document.write(" Variable names are case sensitve<br>")
// document.write("Variable names should not be JS KEyword")
