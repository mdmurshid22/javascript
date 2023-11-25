var name=prompt("Enter Your Name:")
var roll_no=parseInt(prompt("Enter Your Education 1 to 10:"))
var mark=parseInt(prompt("Enter Your Mark:"))
if(roll_no <=10){
 if(mark >= 90){
 console.log('Roll Number is'+' '+roll_no+' '+name+' '+'Grade 1'+' '+mark+' '+Mark)
  }
  else if(mark >= 70){
  console.log('Roll Number is'+' '+roll_no+' '+name+' '+'Grade 2'+' '+mark+' '+Mark)
  }
   else if(mark >= 50){
   console.log('Roll Number is'+' '+roll_no+' '+name+' '+'Grade 3'+' '+mark+' '+Mark)
   }
    else if(mark >= 35){
   console.log('Roll Number is'+' '+roll_no+' '+name+' '+'Grade 4'+' '+mark+' '+Mark)
   }
    else if(mark < 34){
   console.log('Roll Number is'+' '+roll_no+' '+name+' '+'Fail'+' '+mark+' '+Mark)
   }
}
 else{
 console.log('Invalid Roll Number!')
 }  