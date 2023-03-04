const arrray = [1,4,7,6,9,5,4,5,11,21]
let count = 0
function linearSearch(arr, item) {
    for (let i = 0; i < arr.length; i++){
        count += 1
        if(arr[i] === item) {
            return i;
        }
    }
    return null
}

console.log(linearSearch(arrray, 67))
console.log('count = ' + count)
// Сложность алгоритма O(n)
