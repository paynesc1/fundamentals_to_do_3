//Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].
// function biggie_size(arr){
//     const my_arr = []
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]>0){
//             arr[i]="big"
//             my_arr.push(arr[i])
//         }
//         else{
//             my_arr.push(arr[i])
//         }
//     }
//     return my_arr

// }
// var result = biggie_size([-1,3,5,-5])
// console.log(result)


//Create a function that takes an array of numbers. The function should print the lowest value in the array, and return the highest value in the array.
// function high_low(arr){
//     var lowest = arr[0]
//     var highest = arr[0]
//     //iterate through array
//     for(i=0;i<arr.length;i++){
//         //determine if value in array is lowest
//         if(arr[i]<lowest){
//             lowest=arr[i]
//         }
//         if(arr[i]>=highest){
//             highest=arr[i]
//         }
//     }
//     console.log(lowest)
//     return highest
// }
// var result = high_low([10,1,2,3,8,5,3,9])
// console.log(result)


//Build a function that takes an array of numbers. The function should print the second-to-last value in the array, and return first odd value in the array.
// function print_one(arr){
//     //declare second to last variable
//     var second = arr[arr.length-2]
//     console.log(second)
//     //declare first odd number variable
//     var first_odd = []
//     //iterate through array to find first odd number, break
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]%2==1){
//             first_odd.push(arr[i])
//             break;
//         }
//     }
//     return first_odd[0]
// }
// var result = print_one([10,1,2,3,8,5,3,9])
// console.log(result)


//Given an array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.
// function dbl_vision(arr){
//     //create variable for new array
//     const double=[]
//     //iterate through the array
//     for(var i=0;i<arr.length;i++){
//         var dbl_index = (arr[i]*2)
//         double.push(dbl_index)
//     }
//     //for each index double it
//     return double
// }
// var result = dbl_vision([1,2,3,4,5])
// console.log(result)


//Given an array of numbers, create a function to replace last value with the number of positive values. Example,  countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
// function count_positives(arr){
//     //create variable for new array
//     var count=0
//     //create variable for total number of positive nums
//     var pos_nums=[]
//     //replace last num of arr with abovve variable
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]>0){
//             count+=1
//         }
//     }
//     for(var i=0;i<arr.length;i++){
//         pos_nums.push(arr[i])
//     }
//     pos_nums[pos_nums.length-1] = count
//     console.log(pos_nums)
// }
// count_positives([-1,1,1,1])


//Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"
// function evens_odds(arr){

// }
// evens_odds([1,2,3,3,3,4,5,6,8,8,1])



//Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr.
// function increment(arr){
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]%2==1){
//             arr[i] =arr[i]+1
//         }
//     }
//     console.log(arr)
// }
// increment([1,2,3,4,5,6,7,8,9])


