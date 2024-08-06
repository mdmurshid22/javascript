//1)Square star pattern in javascript.
//Eg ->1. by using repeat() method.

/*let num = 5
let star = '* '
for(i=1;i<=num;i+=1){
	let s = star.repeat(num);
	console.log(s)
}*/
//-------------------------------------------------------------------------------------------

//Eg ->2. by using for loop.

let num = 5
let result = ''
for(i=1;i<=num;i++){
	for(j=1;j<=num;j++){
		result = result + '* '
	}
	result = result + '\n'
}
console.log(result)
















































































































