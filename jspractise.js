for (let i = 1; i <= 5; i++) {
    setTimeout(() =>console.log(i),1000);
}
console.log('---------------------');
for (var i = 1; i <= 5; i++) {
    setTimeout(() =>console.log(i),1000);
}

console.log('value of i ' + i);