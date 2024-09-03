const numbers = [27, 18, 1, 70, 97, 103]
let sum = 0
for (let i=0; i<numbers.length; i++)
{
    if(numbers[i] % 2 == 1)
    {
        sum+=numbers[i]
    }
}
console.log(`sum: ${sum}`)