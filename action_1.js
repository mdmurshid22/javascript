var name=prompt('Enter any Month name with lower case:')
if((name == 'january')||(name == 'march')||(name == 'may')||(name == 'july')||(name == 'september')||(name == 'november'))
{
console.log(name+' '+'Is 31 days Only!')
}
else if(name == 'february')
{
console.log(name+' '+'Is 29 days Only!')
}
else if((name =='april')||(name =='june')||(name == 'august')||(name == 'october')||(name == 'december'))
{
console.log(name+' '+'Is 30 Days Only!')
}
else
{
alert(name+' '+'is Incorrect! Please Enter any Month with lower case!')
}
