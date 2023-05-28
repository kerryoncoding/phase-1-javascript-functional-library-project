
function myEach(collection, callback){
   checkArray(collection).forEach(element => {
      callback(element)
   })
   return collection
}

function checkArray(collection){
   let collectionArray = []
   if (Array.isArray(collection) === true ){
      collectionArray = collection.map(x => x)    
   } else {
      collectionArray = Object.values(collection)
   }
   return collectionArray
}

function myMap(collection, callback){
   // console.log(collection)
   // console.log(callback)
   //console.log(checkArray(collection))
   let newArray = checkArray(collection).map(x => callback(x))
   //console.log(newArray)
   return newArray
}

function myReduce(collection, callback, acc){
      console.log(checkArray(collection))
      console.log(callback)
      // console.log(acc)

      

      if (acc == undefined){
      acc = (checkArray(collection)[0])
      console.log("no start value")
   }
   console.log(acc)
   
   //const reducedArrayValue =  (checkArray(collection)).reduce((callback), val)
   const reducedArrayValue =  (checkArray(collection)).reduce(
        callback(acc, currentValue), initialValue
      );
   console.log(reducedArrayValue)
}

//// **** called TC - something is not working with lab **** was told to skip it and keep moving

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );



//arr.reduce(callback(accumulator, currentValue), initialValue)

// reduce() Parameters
// The reduce() method takes in:

// callback - The function to execute on each array element (except the first element if no initialValue is provided). It takes in
// accumulator - It accumulates the callback's return values.
// currentValue - The current element being passed from the array.
// initialValue (optional) - A value that will be passed to callback() on first call. If not provided, the first element acts as the accumulator on the first call and callback() won't execute on it.



