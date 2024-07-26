//1) Write a javascript program to given number is prime or not?

num = 9
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
}