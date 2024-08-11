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

/*num = 7
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
console.log(result)*/
//-------------------------------------------------------------------------------------------

//3)Right triangle star pattern program in JavaScript.

/*num = 9
result = ''
for(i=1;i<=num;i++){
	for(j=1;j<=num;j++){
		if(i<=(num-j)){
			result += '  ';
		}
		else{
			result += '* '
		}
	}
result += '\n';
}
console.log(result)*/
//-------------------------------------------------------------------------------------------

//4)Left triangle star patter program in JavaScript.

/*num = 10
result = ''
for(i=1;i<=num;i++){
	for(j=1;j<=num;j++){
		if(i<=(num-j+1)){
			result += '* '
		}
		else{
			result += '  '
		}
	}
	result += '\n'
}
console.log(result)*/
//-------------------------------------------------------------------------------------------

//5)Downward Left triangle star pattern program in JavaScript.

/*num = 5
result = ''
for(i=1;i<=num;i++){
	for(j=1;j<=num;j++){
		if(i<=(num+1-j)){
			result += '* '
		}
		else{
			result += ' '
		}
	}
	result += '\n'
}
console.log(result)*/
//---------------------------------------------------------------------------------------------

//6)Downward Right triangle star pattern program in JavaScript.

/*num = 5
result = ''
for(i=1;i<=num;i++){
	for(j=1;j<=num;j++){
		if(j <= (i-1)){
				result += '  '
			}
			else{
				result += '* '
			}
		}
	result += '\n'
}
console.log(result)*/
//---------------------------------------------------------------------------------------------

//7)Hollow Left triangle star pattern program in JavaScript.

/*num = 9
result = ''
for(i=1;i<=num;i++){
	for(j=1;j<=num;j++){
		if(i<num){
			if((j == 1) || (j == i)){
				result += '* '
			}
			else{
				result += '  '
			}
		}
		else{
			result += '* '
		}
	}
	result += '\n'
}
console.log(result)*/
//--------------------------------------------------------------------------------------------

//8)Hollow Right triangle star pattern program in JavaScript.

/*num = 4
result = ''
for(i=1;i<=num;i++){
	for(j=1;j<=num;j++){
		if(i<num){
			if((j == num) || (j == (num+1-i))){
				result += '* '
			}
			else{
				result += '  '
			}
		}
		else{
			result += '* '
		}
	}
	result += '\n'
}
console.log(result)*/
//--------------------------------------------------------------------------------------------

//9)Pyramid star pattern program in JavaScript.

/*num = 7
result = ''
for(i=1;i<=num;i++){
	for(j=1;j<=num;j++){
		if(j<=num-i){
			result += ' '
		}
		else{
			result += '* '
		}
	}
	result += '\n'
}
console.log(result)*/
//---------------------------------------------------------------------------------------------

//10)Reversed pyramid star pattern program in JavaScript.

/*num = 8
result = ''
for(i=1;i<=num;i++){
	for(j=1;j<=num;j++){
		if(i == 1){
			result += '* '
		}
		else if(i<=num){
			if(j<=i-1){
				result += ' '
			}
			else{
				result += '* '
			}
		}
	}
	result += '\n'
}
console.log(result)*/
//----------------------------------------------------------------------------------------------

//11)Diamond star pattern program in JavaScript.

/*num = 9
result = ''
for(i=1;i<=num;i++){
	for(j=1;j<=num;j++){
		if(j <= (num-i)){
			result += ' '
		}
		else{
			result += '* '
		}
	}
	result += '\n'
}
for(k=1;k<=num;k++){
	for(q=1;q<=num;q++){
		if(q<=k){
			result += ' '
		}
		else{
			result += '* '
		}
	}
	result += '\n'
}
console.log(result)*/
//--------------------------------------------------------------------------------------------------

//12)Hollow pyramid star pattern program in JavaScript.

/*num = 5
result = ''
for(i=1;i<=num;i++){
	for(j=1;j<=num;j++){
		if(i<num){
			if(j==(num+1-i)){
				result += '*'
			}
			else{
				result += ' '
			}
		}
		else if(i==num){
			if(j<=num){
				result += '* '
			}
			else{
				result += ' '
			}
		}
	}
	for(k=2;k<num;k++){
		if((i<=2) || (i<num)){
			if(k==i){
				result += '* '
			}
			else{
				result += ' '
			}
		}
	}
	result += '\n'
}
console.log(result)*/
//-------------------------------------------------------------------------------------------------
 
//13)Hollow diamond star pattern program in JavaScript.

/*num = 15
result = ''
for(i=1;i<=num;i++){
	for(j=1;j<=num;j++){
		if(j==(num+1-i)){
			result += '*'
		}
		else{
			result += ' '
		}
	}
	for(k=2;k<=num;k++){
		if(k==i){
			result += '* '
		}
		else{
			result += ' '
		}
	}
	result += '\n'
}
for(a=2;a<=num;a++){
	for(b=1;b<=num;b++){
		if(b==a){
			result += '*'
		}
		else{
			result += ' '
		}
	}
	for(c=2;c<=num;c++){
		if(c==(num+1-a)){
			result += '* '
		}
		else{
			result += ' '
		}
	}
	result += '\n'
}
console.log(result)*/
//-----------------------------------------------------------------------------------------------

//14)Hourglass star pattern program in JavaScript.

/*num = 5
result = ''
for(i=1;i<=num;i++){
	for(j=1;j<=num;j++){
		if(j<=(i-1)){
			result += ' '
		}
		else{
			result += '* '
		}
	}
	result += '\n'
}
for(k=2;k<=num;k++){
	for(q=1;q<=num;q++){
		if(q<=(num-k)){
			result += ' '
		}
		else{
			result += '* '
		}
	}
	result += '\n'
}
console.log(result)*/
//------------------------------------------------------------------------------------------

//15)Right pascal star pattern program in JavaScript.

/*num = 7
result = ''
for(i=1;i<=num;i++){
	for(j=1;j<=num;j++){
		if(j<=i){
			result += '* '
		}
		else{
			result += ' ' 
		}
	}
	result += '\n'
}
for(k=2;k<=num;k++){
	for(q=1;q<=num;q++){
		if(q<=num+1-k){
			result += '* '
		}
		else{
			result += ' '
		}
	}
	result += '\n'
}
console.log(result)*/
//-------------------------------------------------------------------------------------------

//16)Left pascal star pattern program in JavaScript.

/*num = 8
result = ''
for(i=1;i<=num;i++){
	for(j=1;j<=num;j++){
		if(j<=num-i){
			result += '  '
		}
		else{
			result += '* '
		}
	}
	result += '\n'
}
for(k=2;k<=num;k++){
	for(q=1;q<=num;q++){
		if(q<=k-1){
			result += '  '
		}
		else{
			result += '* '
		}
	}
	result += '\n'
}
console.log(result)*/
//----------------------------------------------------------------------------------------------------

//17)Heart star pattern program in Javascript.

num = 4
result = ''
for(i=num-2;i<=num;i++){
	for(j=1;j<=num;j++){
		if((i==(num-1)) || (i==(num-2))){
			if(j<=(num-i)){
				result += '  '
			}
			else{
				result += '* '
			}
		}
	}
	for(m=1;m<num;m++){
		if((i==(num-1)) || (i==(num-2))){
			if(m<=(num-i-1)){
				result += ' '
			}
			else{
				result += '* '
			}
		}
	}
result += '\n'
}
/*for(k=num-2;k<=num;k++){
	for(q=1;q<=num;q++){
		if((k==(num-1)) || (k==(num+2))){
			if(q<=(num-k)){
				result += ' '
			}
			else{
				result += '* '
			}
		}
	}
	result += '\n'
}*/
console.log(result)




















































































































































































































































































































































































































































































































































































































































































































































































