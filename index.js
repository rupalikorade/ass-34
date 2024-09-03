const marks = [100, 1000, 2080, 1070]
let largest = marks[0]
for (const num of marks)
{
    if(num>largest)
    {
        largest=num
    }
}
console.log(largest)