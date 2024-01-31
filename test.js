/*num=Number(prompt("Enter Any Number"))
for(i=1;i<=num;i++){
	for(j=1;j<=i;j++){
	document.write('*')
}
document.write('<br>')
}
document.write(typeof(num))*/
num=Number(prompt("Enter Any Number"))
i=1
j=1
while (i <= num){
	while (j <= i){
	document.write('*'+' ')
	j++
}
document.write('<br>')
i++
j=1
}
i=1
while (i <= num-1){
	while (j <= num-i){
	document.write('*'+' ')
	j++
}
document.write('<br>')
i++
j=1
}