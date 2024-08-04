string = ''
num = 5
for(i=1;i<=num;i+=1){
	for(j=1;j<=i;j+=1){
		string += '* '
	}
	string += '\n'
}
for(i=1;i<=num;i+=1){
	for(j=1;j<=num-i;j+=1){
		string += '* '
	}
	string += '\n'
}
console.log(string)