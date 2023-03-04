const array1 = [0,1,4,213,63,7,4,-65,-4,2,3,6,7,8]
let count = 0

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[indexMin]){
                indexMin = j;
            }
            count += 1;
        };
        let tmp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = tmp;
    };
    return array
}

console.log(selectionSort(array1))
console.log(count)

//Сложность алгоритма O(n*n)