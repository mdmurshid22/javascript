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
var j=1
while (i<=num1){
	while (j<=i){
	document.write('*'+" ")
	j++
}
document.write('<br>')
i++
j=1
}