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

/*let num = 5
let result = ''
for(i=1;i<=num;i++){
	for(j=1;j<=num;j++){
		result = result + '* '
	}
	result = result + '\n'
}
console.log(result)*/
//-------------------------------------------------------------------------------------------

//Eg ->3. by using while loop.

/*num = 5
i = 1
j = 1
result = ''
while(i<=num){
	while(j<=num){
		result += '* '
		j++
	}
console.log(result)
i++
}*/
//-------------------------------------------------------------------------------------------

//2)Hollow square star pattern program in JavaScript.

num = 7
result = ''
for(i=1;i<=num;i++){
	for(j=1;j<=num;j++){
		if((i == 1) || (i == num)){
			result += '* '
		}
		else{
			if((j == 1) || (j == num)){
				result += '* '
			}
			else{
				result += '  '
			}
		}
	}
	result += '\n'
}
console.log(result)












































































































































































