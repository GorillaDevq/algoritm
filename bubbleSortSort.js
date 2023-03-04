const array1 = [0,1,4,213,63,7,4,-65,-4,2,3,6,7,8,6,1,4,2,15]
let count = 0

// function bubbleSort(array) {
//   for (let i = 0; i < array.length; i++){
//     for (let j = i+1; j < array.length; j++){
//       if (array[i] > array[j]) {
//         let indexMax = array[i]
//         let indexMin = array[j]
//         array[j] = indexMax
//         array[i] = indexMin
//       }
//       count += 1
//     }
//   }
//   return array
// } Мой вариант))

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
          if (array[j + 1] < array[j]) {
              let tmp = array[j]
              array[j] = array[j+1]
              array[j+1] = tmp
          }
          count+=1
      }
  }
  return array
}

console.log(bubbleSort(array1))
console.log(count)
//Сложность алгоритма O(n*n)