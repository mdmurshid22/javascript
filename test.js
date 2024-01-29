/*num=Number(prompt("Enter Any Number"))
for(i=1;i<=num;i++){
	for(j=1;j<=i;j++){
	document.write('*')
}
document.write('<br>')
}
document.write(typeof(num))*/
num1=Number(prompt("Enter Any Number"))
var i=1
let j=1
while (i<=num1){
	while (j<=num1){
	document.write("$")
	j++
}
i++
document.write('<br>')
}