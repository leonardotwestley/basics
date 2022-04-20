function addTwoNums(num1, num2){
    return num1 + num2;
}
console.log(addTwoNums(30,20))

const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]

//loop thru array|declare vari 2 keep track of sum of trues
//check which index is true|increment the vari
//return vari





function checkTrue(arr){
    let result = 0
    for(let i = 0; i < arr.length; i++){
        //if(arr[i] === true)
        if(arr[i]){
            //result = result + 1
            result++
        }
    }

    return result;
}
console.log("This is the result", + checkTrue(testArray))

function trueArrays(){
    for(const bool of testArray){
        if(bool){
            sum++
        }
        return sum
    }

    console.log(trueArrays(testArray))
}

function getFirst