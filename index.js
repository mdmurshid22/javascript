//1) Write a javascript program to given number is prime or not?

/* num = 9
i = 2
prime = true
while(i<num){
	if(num%i == 0){
		console.log(num,'not prime number.')
		prime = false
		break
	}
	i+=1
}
if(prime == true){
	console.log(num,'prime number.')
} */

// 2)Write a javascript program to prime the number of prime number is?

numb = 10
no = 3
i = 2
console.log(2)
count = 1
prime = true
while(count<numb){
	while(i<no){
		if(no%i == 0){
			prime = false
			break
		}
		i+=1
	}
	if(prime == true){
		console.log(no)
		no+=2
	}
	count+=1
}










