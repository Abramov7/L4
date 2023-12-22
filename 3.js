let a = [0, 9, 1, 4]
let c = 0

for (let i=0;i<a.length;i++){
    for (let k=0;k<a.length;k++){
        if (a[k] > a[i]){
            c = a[k]
            a[k] = a[i]
            a[i] = c
        }
    }
}

console.log(a)