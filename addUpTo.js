function addUpto(n) {
    let total = 0
    for (let i = 0; i < n.length; i++) {
        total += n[i]
    }

    return total;
}

const results = addUpto([1, 2, 3, 4, 5, 6])
console.log(results);