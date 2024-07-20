var num = +prompt("Type your percentage and i'll tell you your grade accordingly.");

if(num >= 0 && num <= 100){
 if(num >= 80){
    grade = "A1";
}
else if(num >= 70){
 grade="A";
}
else if(num >= 60){
    grade="B";
}
else if (num >= 50){
    grade="C";
}
else{
    grade="D"
}  
alert("Your grade is " + grade); 
}
else{
    alert("Wrong input");
}
