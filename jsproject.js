const arr = [2,3,4,5,6,7,8,9]

arr.forEach(element => {
    element = element*element
    console.log(element)
});

console.log(arr)




const arrMap = arr.map(element =>{ 
    return element+= 10
});

console.log(arrMap)