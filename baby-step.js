let sum = 0
for (let i=2; i <= process.argv.length - 1; i++){
    sum += Number(process.argv[i]);
    i++
}
console.log(sum)

