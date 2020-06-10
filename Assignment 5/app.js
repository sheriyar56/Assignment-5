
function Assignment1(){


    var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';

        
        alert("Ass1task1 "+greet +" and welcome to my Assignment");
    }


    function task2(){

alert("Error! Please enter a valid password");

    }

function task3(){

alert("Welcome to JS Land \n Happy Coding!");

    }



function task4load()
{
   myAlert();
   sayHello("Sir");
}

function myAlert()
{
  alert("Welcome to JS Land");
}

function sayHello(name)
{
   alert("Happy Coding! " + name);
}


function ass1task5(){

   
var a = alert("I can run js through console");
    console.log(a);
}


function ass2task1(){

    var username;

    alert("var username;");
}

function ass2task2(){

    var myName="Junaid";

    alert("var myName='Junaid';");
}

function ass2task3(){

    var message="Hello World";

    alert(message);
}


function ass2task4(){


    var name="Junaid";
    var age="22 years old";
    var qualification="Certified Mobile Application Development";
    alert(name);
    alert(age);
    alert(qualification);

}


function ass2task5(){


    var pizza="PIZZA";

    alert(pizza+"\n"+pizza.substring(0,pizza.length-1)+"\n"+pizza.substring(0,pizza.length-2)+"\n"+pizza.substring(0,pizza.length-3)+"\n"+pizza.substring(0,pizza.length-4));

}


function ass2task6(){

	var email = "example@example.com";

	alert("My email address is "+email);
}
    
function ass2task7(){

	var book = "A smarter way to learn JavaScript";

	alert("I am trying to learn from the book "+book);
}

function ass2task8(){
	document.write("YAH! I can write HTML content through JavaScript");
}

function ass2task9(){
    var b ="\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u0B9C\u06E9\u06DE\u06E9\u0B9C\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC";
	 alert(b);
}


function ass3task1(){
	var age=21;
	alert("I am "+age+" years old");

}



//localStorage.setItem("counter", 0 );
var count=localStorage.getItem("counter");

if(!count){
	count=1;
}else{
	count=parseInt(count)+ 1;
	localStorage.setItem("counter",count);
}


function VisitCounter(){
	alert("You have visited this site "+count+" times");
}

function ass3task3(){

	var birthYear= 1998;
	document.write("My birth year is "+birthYear+"<br> Data type of my declared variable is number");
}

function ass3task4(){

	var vistorName="John Doe";
	var productTitle= "T-shirt(s)";
	var quantity=5;
	document.write(vistorName+" ordered "+quantity+" "+productTitle+" on XYZ Clothing store");
}

function ass4task1(){

    var a,b,c;

    alert("var a , b, c;");

}

function ass4task2(){

    var a;
    var $b;
    var _a;
    var age_of_hh_head;
    var x25;
    
    alert("Legal variables: \n var a;\n var $b ; \n var _a; \n var age_of_hh_head; \n var x25; \n \nillegal variables: \n var break; \n var ?boolean; \n var 1b; \n var +a; \n var max age;" )

    //var break;
    //var ?boolean;
     // var 1b;
    // var +a;
    // var max age;
    
   
}


function ass4task3(){

	
    document.write("<h1>Rules for naming JS variables</h1><br><br>Variable names can only contain numbers,$,and _ for example :$ my_1stvariable <br/> Variables must begin with a letter $ or_For example $my_1stVariable <br/> Variable names are case sensitive <br/> Variable names should not be JS keyword");
   
    
}

function ass5task1(){

    var a = 3;
    var b = 5;
    var c= a+b;
    document.write("Sum of "+a+" and "+b+" is "+c);
}


function ass5task2(){

    var a = 3;
    var b = 5;
    var c= a-b;
    document.write("Subtraction of "+a+" and "+b+" is "+c+"<br><br>");

    var a = 3;
    var b = 5;
    var c= a*b;
    document.write("Multiplication of "+a+" and "+b+" is "+c+"<br><br>");

    var a = 3;
    var b = 5;
    var c= a/b;
    document.write("Division of "+a+" and "+b+" is "+c+"<br><br>");

    var a = 3;
    var b = 5;
    var c= a%b;
    document.write("Modulus of "+a+" and "+b+" is "+c);
}


function ass5task3(){

    var a;
    document.write("Value after variable declaration is "+a);
    a=5;
    document.write("<br>Initial value: "+a);
    a=a+1;
    document.write("<br>Value after increment is: "+a);
    a=a+7;
    document.write("<br>Value after Addittion: "+a);
    a=a-1;
    document.write("<br>Value after decrement is: "+a);
    a=a%3;
    document.write("<br>The remainder is : "+a);
}

function ass5task4(){

    var price=600;
    var a=5;
    var c = price * a;
    document.write("Total cost to buy 5 tickets to a movie is "+c+" PKR");
}


function ass5task5(){
var a=4;
for(var i=1; i<=10; i++){

    document.write(a+"x "+i+" = "+a*i+" <br>");
}

}


function ass5task6(){


    var celsius=25;

    var Result=(celsius * 9/5) +32;
    var result=Math.round((celsius * (9/5)) + 32);
    var Fahrenheit=70;
    var result1=(Fahrenheit -32)* 5/9;
    //var result2=Math.round((Fahrenheit -32)* 5/9);

    document.write(celsius+"\u00B0C is "+result+"\u00B0F <br>");
    document.write(Fahrenheit+"\u00B0F is "+result1+"\u00B0C");
}


function ass5task7(){

var item1_Price= 650;
var item2_Price= 100;
var item1_Quantity=3;
var item2_Quantity=7;
var shipCharge=100;
var item1_total=item1_Price*item1_Quantity;
var item2_total=item2_Price * item2_Quantity;
var Total=item1_total+item2_total+shipCharge;

document.write( "<h1>SHOPPING CART</h1> <br/> <br/> price of item 1 is "+item1_Price+"<br/> quantity of item 1 is "+item1_Quantity+"<br/> price of item 2 is "+item2_Price+"<br/>  quantity of item 2 is "+item2_Quantity+"<br/> shipping charges "+shipCharge+"<br/><br/> Total cost of your order is "+Total+"<br/>"  );

}

function ass5task8(){

   var total= 980;
   var marks= 804;
   var percent= marks/total*100;
   
   document.write("<h1>Marks sheet</h1> <br/> <br/> total marks:"+total+"<br/> marks obtained:"+marks+"<br/> percentage:"+percent+"%<br/>")



    
}

function ass5task9(){

var us$=10;
var riyal=25;
var conv_rate_$=104.80;
var conv_rate_riyal=28;

var total_$_in_pkr=us$*conv_rate_$;
var total_riyal_in_pkr=riyal*conv_rate_riyal;
var result=total_riyal_in_pkr+ total_$_in_pkr;

document.write("<h1>Currency in PKR</h1><br><br>Total Currency in PKR: "+result);


}


function ass5task10(){

var a=2;
var result=(((a+5)*10)/2);
alert(result);

}

function ass5task11(){

     var cur_year=2020;
     var birthYear=1998;
     var age=cur_year-birthYear;
     var last=age-1;

     document.write("<h1>Age Calculator</h1><br><br> Current Year: "+cur_year+"<br>Birth Year: "+birthYear+"<br>Your Age is: "+age);
     document.write("<br>They are either "+last+" or "+age+" years old");
}

function ass5task12(){

    var radius=20;
    var pie=3.142;
    var circum=2*pie*radius;
    var area=pie * radius*radius;
    
    document.write("<h1>The Geometrizer</h1> <br><br> Radius of a circle is: "+radius+"<br> The circumference is :"+circum+"<br> The area is: "+area+"")

}


function ass5task13(){

   var snack="Chocolate chip";
   var age=15;
   var maximun_age=65;
   var snacks_per_day=3;
   var dif_age=maximun_age-age;
   var last_ripe=dif_age*snacks_per_day;

   document.write("<h1>The Lifetime Supply Calculator</h1><br><br>Favourite Snack: "+snack+"<br>Current age: "+age+"<br>Estimated Maximum Age: "+maximun_age+"<br>Amount of snacks per day: "+snacks_per_day+"<br>You will need "+last_ripe+" "+snack+"  to last you until the ripe old age of "+maximun_age);
}


function ass6task1(){

var a=10;
document.write("Result: <br>The value of a is: "+a+"<br>....................");
a=++a;
document.write("<br><br>The value of ++a is: "+a+"<br>Now the value of a is: "+a);
a=a++;
document.write("<br><br>The value of a++ is: "+a);
a=++a;
document.write("<br>Now the value of a is: "+a);
a=--a;
document.write("<br><br>The value of --a is: "+a+"<br>Now the value of a is: "+a);
a=a--;
document.write("<br><br>The value of a-- is: "+a);
a=--a;
document.write("<br>Now the value of a is: "+a);
}

function ass6task2(){
    var a=2;
    var b=1;
    var x=--a;
    var y=--b;
    var z=++b;
    var w=b--;
    var result=x - y + z + w;
    document.write("The value of a is : "+a+"<br>The value of b is : "+b+"<br> Result is :"+result);


    a=2;
    a=--a;
    document.write("<h2>--a</h2>"+a);
    a=2;
    a=--a;
    b=1;
    b=--b;
    c=a-b;
    document.write("<br><br><h2>--a - --b</h2>"+a+" - "+b+" = "+c);
    b=1;
    b=--b;
    a=2;
    a=--a;
    var t=1;
    t=++t;
    d=a-b+t;
    document.write("<br><br><h2>--a - --b + ++b</h2>"+a+" - "+b+ " + "+t+ "= "+d);
    a=2;
    a=--a;
    b=1;
    b=--b;
    var g=1;
    g=++g;
    var p=1;
    p=p--;
    var r=a-b+g+p;
    
    document.write("<br><br><h2>--a - --b + ++b + b--</h2>"+a+" - "+b+ " + "+g+" + "+p+" = "+r);
    

   }

   function ass6task3(){

    var username=prompt("Enter your name :");
    alert("Welcome to the world of code "+username);
   }


   function ass6task4(){
var default1=5;
var number = parseInt(prompt("Enter a number for Multiplication :" , default1));
for(var i=1; i<=10; i++){

    document.write(number+"x "+i+" = "+number*i+" <br>");
}

 }


 function ass6task5(){

    var first=prompt("Enter first subject name: ");
    var second=prompt("Enter second subject name: ");
    var third=prompt("Enter third subject name: ");
    var first_marks=100;
    var second_marks=100;
    var third_marks=100;
    var tot_marks=first_marks+second_marks+third_marks;
    var obt_first_marks=parseInt(prompt("Enter first subject obtained marks :"));
    var obt_second_marks=parseInt(prompt("Enter second subject obtained marks :"));
    var obt_third_marks=parseInt(prompt("Enter third subject obtained marks :"));
    var tot_obt_marks=obt_first_marks+obt_second_marks+obt_third_marks;
    var first_per=obt_first_marks/first_marks*100;
    var second_per=obt_second_marks/second_marks*100;
    var third_per=obt_third_marks/third_marks*100;
    var tot_per=tot_obt_marks/tot_marks*100;
    document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>percentage</th></tr><tr><td>"+first+"</td><td>"+first_marks+"</td><td>"+obt_first_marks+"</td><td>"+first_per+"%</td></tr><tr><td>"+second+"</td><td>"+second_marks+"</td><td>"+obt_second_marks+"</td><td>"+second_per+"%</td></tr><tr><td>"+third+"</td><td>"+third_marks+"</td><td>"+obt_third_marks+"</td><td>"+third_per+"%</td></tr></table>");
    document.write("\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0 <b>"+tot_marks+"</b> \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0  <b>"+tot_obt_marks+"</b> \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0  <b>"+tot_per+"%</b>");
}

function ass7task1(){


    var city= prompt("Enter a city name :");
    if (city== "Karachi" || city=="karachi") {
        alert("Welcome to city of lights");
    }else{
        alert("Welcome to your city "+city);
    }
}

function ass7task2(){

    var gender=prompt("Enter your gender");
    if (gender== "male" || gender== "Male") {
            alert("Good Morning Sir");
    }else if(gender=="female" || gender=="Female"){
        alert("Good Morning Madam.");
    }else{
        alert("Your gender is not found");
    }
}


function ass7task3(){

    var signal=prompt("Enter color of road signal :");
    if (signal=="Red" || signal=="red") {
        alert("Must Stop");
    }else if(signal=="Yellow" || signal=="yellow"){
        alert("Ready to move");
    }else if(signal=="Green" || signal=="green"){
        alert("Move now");
    }
}

function ass7task4(){

    var fuel=parseInt(prompt("Enter your remaining fuel in car:"));
    if (fuel< 0.25) {
        alert("Please refill the fuel in your car");
    }else{
        alert("Drive safe take care");
    }

}

function ass7task5(){

    var a = 4;
    if (++a === 5){
    alert("given condition for variable a is true "+a); 
}

    var b = 82;
    if (b++ === 82){
    alert("given condition for variable b is true "+b); }


    var c = 12;
    if (c++ === 12){ 
            alert("condition 1 is true"); }
    if (c === 13){ 
        alert("condition 2 is true"); }
    if (++c < 15){ 
        alert("condition 3 is true"); }
    if(c === 14){ 
        alert("condition 4 is true"); }

    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){ 
        alert("The cost equals");
}


    if (true){ 
        alert("True"); 
    }
    if (true){ 
        alert("False"); 
    }


    if("car" < "cat"){
    alert("car is smaller than cat"); 
}

}


function ass7task6(){
    var first_marks=parseInt(prompt("Enter first subject total marks :"));
    var second_marks=parseInt(prompt("Enter second subject total marks :"));
    var third_marks=parseInt(prompt("Enter third subject total marks :"));
    var tot_marks=first_marks+second_marks+third_marks;
    var obt_first_marks=parseInt(prompt("Enter first subject obtained marks :"));
    var obt_second_marks=parseInt(prompt("Enter second subject obtained marks :"));
    var obt_third_marks=parseInt(prompt("Enter third subject obtained marks :"));
    var marks_obtained=obt_first_marks+obt_second_marks+obt_third_marks;
    var percentage=marks_obtained/tot_marks*100;

    if(percentage>=80){
            document.write("<h1>Marks Sheet</h1><br><br><h3>Total marks : "+tot_marks+"</h3><h3>Marks obtained : "+marks_obtained+"</h3><h3>Percentage : "+percentage+"%</h3><h3>Grade : A-one</h3><h3>Remarks : Excellent</h3><br>");
    }else if(percentage>=70){
            document.write("<h1>Marks Sheet</h1><br><br><h3>Total marks : "+tot_marks+"</h3><h3>Marks obtained : "+marks_obtained+"</h3><h3>Percentage : "+percentage+"%</h3><h3>Grade : A</h3><h3>Remarks : Good</h3><br>");
    }else if(percentage>=60){
            document.write("<h1>Marks Sheet</h1><br><br><h3>Total marks : "+tot_marks+"</h3><h3>Marks obtained : "+marks_obtained+"</h3><h3>Percentage : "+percentage+"%</h3><h3>Grade : B</h3><h3>Remarks : You need to improve</h3><br>");
    }else{
            document.write("<h1>Marks Sheet</h1><br><br><h3>Total marks : "+tot_marks+"</h3><h3>Marks obtained : "+marks_obtained+"</h3><h3>Percentage : "+percentage+"%</h3><h3>Grade : Fail</h3><h3>Remarks : Sorry</h3><br>");
    }
}


function ass7task7(){

    var secret_no=4;
    var user_guess=parseInt(prompt("Guess the secret number ranging from 1 to 10"));
    
    if(user_guess==4){
        alert("Bingo! Correct answer");

    }else if(user_guess==++secret_no){
        alert("Close enough to the correct answer");
        ass7task7();
    }else{
        alert("Try again you are not so close yet");
        ass7task7();
    }


}

function ass7task8(){
    var n=3;
    var user=parseInt(prompt("Enter a number which is divisible by 3"));
    if( !(n % user) ){
        alert("Good Job");
    }else{
        alert("Try again");
        ass7task8();
    }
}

function ass7task9(){
var num=parseInt(prompt("Enter a number :"));
    if ( num % 2 == 0) {
    alert('You typed an Even Number');
}else{
    alert('You typed an Odd Number');
}
}

function ass7task10(){

    var temp=parseInt(prompt("Enter temperature of your area :"));
    if (temp>40) {
        alert("It is too hot outside.");
    }else if(temp>30){
        alert("The Weather today is Normal.");
    }else if(temp>20){
        alert("Todays Weather is cool.");
    }else if(temp>10){
        alert("OMG! Todays weather is so Cool.");
    }else{
        alert("Its too cold here im freezing");
    }
}


function ass7task11(){
    var fisrt_num=parseInt(prompt("Enter first number :"));
    var second_num=parseInt(prompt("Enter second number :"));
    var opera=prompt("Enter the operator");
    if(opera=="+"){
        alert(fisrt_num+second_num);
    }else if(opera=="-"){
        alert(fisrt_num-second_num);
    }else if(opera=="*"){
        alert(fisrt_num*second_num);
    }else if(opera=="/"){
        alert(fisrt_num/second_num);
    }else if(opera=="%"){
        alert(fisrt_num%second_num);
    }else{
        alert("This is not an operator");
    }
}


function ass8task1(){
    var character=prompt("enter a number or character :");

if (!isNaN(character * 1)){
        alert('character is numeric');
    }else{
        if (character == character.toUpperCase()) {
            alert ('upper case true');
        }
        if (character == character.toLowerCase()){
            alert ('lower case true');
        }

}
}

function ass8task2(){
    var val1=prompt("Enter first number :");
    var val2=prompt("Enter second number :");

    if(val1>val2){
        alert(val1+" is the larger number in the two given values");
    }else if(val2>val1){
        alert(val2+" is the larger number in the two given values");
    }else if(val1==val2){
        alert("Both numbers are equal");
    }
}


function ass8task3(){

    var user_val=prompt("Enter any number :");
    if (user_val > 0) {
    alert("You typed a positive number");
    }else if(user_val < 0){
        alert("You typed a negative number ");
    }
    else{
        alert("You typed zero");
    }
}


function ass8task4(){
var firstChar=prompt("Enter a character :");
if (firstChar === "a" || firstChar === "e" || firstChar === "i" || firstChar === "o" || firstChar === "u") {
        
        alert("The character is a Vowel");
    }else{
        alert("The character is a Consonant");
    } 

}


function ass8task5(){
    var pass="welcome123";
    var a;
    var get_pass=prompt("Enter your password :" ,a);

    if (get_pass==="") {
        alert("Please enter your password");
        ass8task5();
    }else if(get_pass==pass){
        alert("Correct The password you entered matches the original password");
    }else{
        alert("Incorrect password");
        ass8task5();
    }
    
}



function ass8task6(){
    var greeting;
    var hour = 13;
    if (hour < 18) {
    greeting = "Good day";
    alert(greeting);
    } 
     else{
    greeting = "Good evening";
    alert(greeting);
     }

}
 


function ass8task7(){
    var time=prompt("Enter time in 24 hours clock format like: 1900");
    if (time>=0000 && time<1200) {
        alert("Good Morning");
    }else if(time>=1200 && time<1700){
        alert("Good Afternoon");
    }else if(time>=1700 && time<2100){
        alert("Good Evening");
    }else if(time>=2100 && time<=2359){
        alert("Good Night");
    }
}



function ass9task1(){

    var StudentNameLiteral= {};

    alert("using JS literal notation \n var StudentNameLiteral= {};");
}


function ass9task2(){
var student_name = new Array();
    
    alert("using JS object notation \n var student_name = new Array();");
}

function ass9task3(){
var stringarry=["john","paul","pablo"];
alert("var stringarry=['john','paul','pablo'];");

}

function ass9task4(){
var intarry=[2,3,45,5];
alert("var intarry=[2,3,45,5];");
}
function ass9task5(){
var boolarray=[true, false ,false , true ];
alert("var boolarray=[true, false ,false , true ];");
}
function ass9task6(){
var mixedarray =["data",2,2.2,true];
alert("var mixedarray =['data',2,2.2,true];");
}

function ass9task7(){

var qualification= ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
var j=0;
document.write("Qualifications: <br><br>");
for(var i=1; i<=qualification.length; i++){
document.write(i+") "+qualification[j]+"<br>");
j++;
    }


}



function ass9task8(){


var studename=["juandi","sheri","Hammad"];
var stdmarks=[240,320,400];

for(var j=0;j<studename.length;j++){
document.write("Score of "+studename[j]+" is "+stdmarks[j]+" Percentage : "+(stdmarks[j]*100)/500+"% <br>");
}
}


function ass9task9(){

var colorname=["red","blue","green"];
document.write(colorname+"<br>");
var user=prompt("Add color start :");
colorname.unshift(user);
document.write("Add "+user+"in start :"+colorname);
var end_val=prompt("Add Color end :");
colorname.push(end_val);
document.write("<br>Add "+end_val+" Color in end :"+colorname);
var one_val=prompt("add first color for start :" );
var two_val=prompt("add second color for start :" );


colorname.unshift(two_val);
colorname.unshift(one_val);
document.write("<br>Added two more color in the begining of array : "+colorname);
colorname.shift(colorname);
document.write("<br>After deleted the first color : "+colorname);
colorname.pop(colorname);
document.write("<br>After deleted the last color : "+colorname);
var colorr=prompt("Color name for add :");
var indexOfColor=prompt("Which index you want "+colorr+" :");
colorname.splice(indexOfColor, 0,colorr);
document.write("<br>Your desired index color : "+colorname);
var del_color=prompt("how many color do you want to delete :");
var arr=[];
if(del_color>colorname.length){
 alert("You can delete below three ");
    var del_color=prompt("how many color do you want to delete :"); 
}else{
    var j=1;
    for(var i=0;i<del_color;i++){
        arr[i]= prompt("Enter "+j+" value :");
        j++;
    }
    

    for (var i = arr.length -1; i >= 0; i--){
        
        colorname.splice(arr[i],1);   
    }
   

    // for(var i=0; i<=del_color.length;i++){

    //    arr[i]= prompt("Enter "+j+" value :");
    //    colorname.splice(arr[i], 1);
    //    j++;
    // }
    document.write("<br>Updated array : "+colorname);
}

}



function ass9task10(){
    var stdScores=[320,230,480,120];
document.write(stdScores+"<br>");
document.write("In ascending  order <br>"+stdScores.sort())

}

function ass9task11(){

    var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];

    var selectedCities=[];
    document.write("<h2>Cities list :</h2>"+cities);
    cities.splice(0,2);

    selectedCities.unshift(...cities);


    document.write("<br><h2>Selected cities list:</h2>"+selectedCities);

}


function ass9task12(){

    var arr = ["This", "is", "my", "cat"];

    document.write("<h2>Array:</h2><br>"+arr);

    var a=arr.join(" ");

    document.write("<h2>string:</h2><br>"+a);    

}

function ass9task13(){

    var fifo = new Array();

    fifo.push("keyboard");
    fifo.push("mouse");
    fifo.push("printer");
    fifo.push("monitor");

    document.write("<h2>Devices:</h2>"+fifo+"<br><br>");
    for(var i =1;i<=4;i++){
    document.write("Out:<br>"+fifo.shift()+"<br>");
}


}



function ass9task14(){

    var lifo = new Array();

    lifo.push("keyboard");
    lifo.push("mouse");
    lifo.push("printer");
    lifo.push("monitor");

    document.write("<h2>Devices:</h2>"+lifo+"<br><br>");
    for(var i =1;i<=4;i++){
    document.write("Out:<br>"+lifo.pop()+"<br>");
}


}


// function ass9task15(){
//     var select = document.getElementById("select");

//     var arr=["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
//     document.write("<select>");
//  for(var i=1; i<=arr.length; i++){

//              document.write("<option value='default'>"+arr[i]+"</option>");
// }
// document.write("</select>");
// }



function ass9task15()
{
    document.write("<select id='s'> <option> --Select Option-- </option> </select> ");
   var x = document.getElementById("s");
  var arr=[];

    var arr=["Apple","Samsung","Motorola","Nokia","Sony","Haier"];

    for(var i=0;i<arr.length;i++){
       

        var option = document.createElement("option");
       
         option.text=arr[i];

        x.add(option);
      }


}


function ass10task1(){

    var twoDee = [[],[],[]];

    alert("Empty Multi dimentional Array : \n  var twoDee = [[],[],[]];");

}


function ass10task2(){

var arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];

for (var i = 0; i <arr.length; i++) {
    var a=arr[i].join(" ");
    document.write(a+"<br>");
    
}

}

function ass10task3(){

    for(var i=1; i<=10; i++){
        document.write(""+i+"<br>");
        }
}


function ass10task4(){


    var number=prompt("Enter a number to show its multiplication table");
    var length=prompt("Enter length multiplication table");
    document.write("Multiplication table of "+number+"<br>length "+length+"<br>");
    for(var i=1; i<=length; i++){
    
    document.write(number+"x "+i+" = "+number*i+" <br>");
}


}


function ass10task5(){

var fruits= ["apple", "banana", "mango","orange","strawberry"];

 for(var i=0; i<5; i++){

    document.write(""+fruits[i]+"<br>");

 }

 for(var i=0; i<5; i++){

document.write("<br>Element at index "+i+" is "+fruits[i]);

 }

}


function ass10task6(){
    var a=1;
    var count = new Array(15);
    var j=0;
    for(var i=1;i<=count.length;i++){
        count[j]=a++;
        j++;
    }
document.write("<h5>Counting:</h5>"+count);

    var b=10;
    var rev_count = new Array(10);
    var j=0;
    for(var i=1;i<=rev_count.length;i++){
        rev_count[j]=b--;
        j++;
    }
document.write("<br><h5>Reverse Counting:</h5>"+rev_count);

var even= [];
var odd= [];
for(var i=0;i<=20;i++){
    if (i % 2 == 0) {
        even.push(i);

    }else{
        odd.push(i);
    }
}
document.write("<br><h5>Even:</h5>"+even);
document.write("<br><h5>Odd:</h5>"+odd);


var f=2;
var f_series= new Array(10);
var j=0;
for(var i=1;i<=f_series.length;i++){
f_series[j]=f*i+"k";
        j++;
    }
document.write("<br><h5>Series:</h5>"+f_series);


}

function ass10task7(){

var a =["cake", "apple pie", "cookie", "chips", "patties"];
var user_value=prompt("Welcome to ABC Bakery. What do you want to order sir/madam");
var found;
var indexOfOrder;
for(var i=0;i<a.length;i++){

    if (a[i]==user_value) {
        found=a[i];
        indexOfOrder=i;
    }
}if (!found) {
    document.write("We are sorry. "+user_value+" is <b>not available</b> in our bakery");

}else{
document.write(found+" is <b>available</b> at index "+indexOfOrder+" in our bakery");    
}

//alert("found : "+found+" indexOfOrder "+indexOfOrder);

}

function ass10task8(){
    var array = [24,53,78,91,12];
 var greatest;
  var indexOfGreatest;
  for (var i = 0; i < array.length; i++) {
    if (!greatest || array[i] > greatest) {
      greatest = array[i];
      indexOfGreatest = i;
    }
  }
  document.write("Array items: "+array+"<br>The largest number is "+greatest);
}


function ass10task9(){
    var array = [24,53,78,91,12];
 var greatest;
  var indexOfGreatest;
  for (var i = 0; i < array.length; i++) {
    if (!greatest || array[i] < greatest) {
      greatest = array[i];
      indexOfGreatest = i;
    }
  }
  document.write("Array items: "+array+"<br>The smallest number is "+greatest);
}


function ass10task10(){

var a =5;

var arr = new Array(20);
var j=0;
for(var i=1;i<=20;i++){

arr[j]=a*i;
j++;    
}

document.write(arr);
}

