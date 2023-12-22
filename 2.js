let a = prompt('a').split(' ')
let b = prompt('b').split(' ')
let c = []

for (let i=0;i<a.length;i++){
    if (Number(a[i])>Number(b[i])){
        c.push(a[i])
    } else {
        c.push(b[i])
    }
}

console.log(c)