// CHANGING CASE
// question1

 var b = prompt("Enter Your Name");
  b = b.toUpperCase();
 console.log(b);

// question 2
 var a = prompt("Enter Your Father Name");
 var firstletter = a.slice(0, 1);
 var otherletters = a.slice(1);
 a = firstletter.toUpperCase() + otherletters.toLowerCase();
 console.log(a);

 // question3
 var phone = prompt("Enter Your Fav Mobile Model");
 console.log(phone);
 var mobile = phone.length;
 console.log(mobile);
 

     // question 5
 var i = "Pakistan"
 var a = i.indexOf("n");
 console.log(a);
 document.write(7);

 // question 7
 var para = "The quick brown fox jumps over the lazy dog.";
 var c = para.indexOf("the");
 console.log(c);

 // question8
 var i = "pakistani";
 var b = i.charAt(3);
 console.log(b);

 // question9
 var city = "Hyderabad";
 var rep = "Hyder";

 var text = city.replace(/Hyder/g, "Islam");
 console.log(text);

 // question 10
 var a = "Ali and Sami are best friends. They play cricket and football together."
 var b = "and";

 var result = a.replace(/and/g, "&");
 console.log(result);
 document.write(result);

 // question11(a)
 var num = Math.round(3.45214);
 console.log(num);
 document.write("<br /> 3");
 
// // (b)
 var numb = Math.floor(3.45214);
 console.log(numb);
 document.write("<br /> 3");

 // (c)
 var numbe = Math.ceil(3.45214);
 console.log(numbe);
 document.write("<br /> 4");

 // question12(a)
 var number = Math.round(-2.678);
 console.log(number);
 document.write("<br /> -3");

 // (b)
 var nu = Math.floor(-2.678);
console.log(nu);
 document.write("<br /> -3");

 // (c)
 var numm = Math.ceil(-2.678);
 console.log(numm);
 document.write("<br /> -2");

// // question13
 var dice = Math.random();
 var six = Math.ceil(dice * 6);
 console.log(six);
 document.write("<br /> 1");

 // (b)
 document.write("<br /> 0 = HEADS , 1 = TAILS");
 var toss = Math.random();
 var a = Math.round(toss);
 console.log(a);

// question14
 var a = "50";
 a = parseFloat(a);
 console.log(a);

 var b = "50kg";
 b = parseFloat(b);
 console.log(b);

 var c = "50.2kgs";
 c = parseFloat(c);
 console.log(c);

 var d = "50.2 kilograms";
 d = parseFloat(d);
 console.log(d);

 // question15
 var a = "472";
 a = +a;
 var type = typeof a;
 console.log(a);
 console.log(type);
 document.write("<br /> 472");

 var b = 35.36;
 b = b.toString();
 console.log(b);
 document.write("<br /> 3536")

// chapter Date 
// question1
var dt = new Date();
console.log(dt);

// question2
var month = ["jan", "feb", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
var dat = new Date();
var mont = dat.getMonth();
alert(month[mont]);

// question3
var days = ["MONDAY", "TUESDAY", " WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
var dt = new Date();
var day = dt.getDay();
console.log(days[day]);
alert("today is friday")

// question4
var dayss = ["SATURDAY","SUNDAY"];
if (dayss == "SATURDAY", "SUNDAYS") {
    console.log("Its Fun Day");
}

// question5
var mont = prompt("put today's date");
var end = 15;

if (mont <= 15) {
    console.log("First fifteen days of the month");
} else if (end >= 15) {
    console.log("Last days of the month.");
}

// question6
var dt4 = new Date();
dt4.setDate(30);
dt4.setFullYear(2020);
dt4.setMonth(11);
dt4.setHours(00)
dt4.setMinutes(00)
dt4.setSeconds(00);
dt4.setMilliseconds(00)
console.log(dt4);

// question7
var dt5 = new Date("6 - march - 2023");
alert("138 Days left for Ramadan");

// question8
var dt6 = new Date("1-jan-2015");
var dt7 = new Date("5-dec-2015");
var u = dt6.getSeconds()
var o = dt7.getSeconds()
var l = dt7 - dt6
console.log(l);

// question9
var dt8 = new Date();
var dt9 = new Date("2015,11,5");
var a = dt8.getTime();
var b = dt9.getTime();
var c = a - b;
var d = c / (1000 * 60);

console.log(dt8);
console.log(c);
console.log(d);

// question10
var dt11 = new Date();
var dt12 = new Date("2015,11,5");
var sec = dt11.getTime();
var secs = dt12.getTime();
var e = sec - secs;

console.log(e);

// function
// question1
function dat() {
    var a = new Date();
}
console.log(dat);

// question2
function user() {
    var first = "ARHAMA";
    var last = "KHALID";
    var mix = first + last;
    console.log(mix);
}
user();

// question3
function abc() {
    var num1 = 10;
    var num2 = 30;
    return (num1 + num2);
}
var num3 = abc();
console.log(num3);

// question4
function calculate(ab, cd) {
    var amount = ab;
    var dic = cd;
    return (ab + cd);
}
var abcd = calculate(10, 30);
var cde = calculate(40, 50);
var ef = calculate(20, 70);
console.log(abcd, cde, ef);

// question5
function mess() {
    var start = prompt("enter start value");
    var end = prompt("enter end value");
    console.log(start, end);
}
mess();




    





    



