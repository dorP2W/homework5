//Question 1
function smallerOne(num1, num2){
    if(num1>num2){
     console.log(num2)
    }    
    else if(num2>num1) {
        console.log(num1)
    } 
    else{ 
    console.log('numbers are equal')
    }
}

// smallerOne(1, 1)
// smallerOne(2, 3)
// smallerOne(3, 2)

//Question 2
function biggerThen3 (str1,str2,str3,str4){
    let counter = 0
    if(str1.length > 3){
        counter++;
    }
    if(str2.length > 3){
        counter++;
    }
    if(str3.length > 3){
        counter++;
    }
    if(str4.length > 3){
        counter++;
    }
    console.log('There is ' + counter + ' strings bigger then 3.')
}

// biggerThen3('hhh','hhhh','hh','')
// biggerThen3('hhh','hhhh','hhh','')
// biggerThen3('hhh','h','hh','')

//Question 3
let inputText 
document.getElementById('q3Button').onclick = function(){
    inputText = document.getElementById('q3Input').value
    if(inputText.indexOf('A') != -1){
        inputText = inputText.replace('A','a');
        console.log('Q3 input: ' + inputText)
    }
}

//Question 4
function checkIfOdd (numToCheck){
    if(numToCheck < 0){
        console.log('Q4: the number is negative')
    }else{
        console.log('Q4: the number is positive')
    }
    if(numToCheck%2 === 0){
        console.log('and even')
    }else {
        console.log('and odd')
    }
}

// checkIfOdd(0)
// checkIfOdd(-9)
// checkIfOdd(11)

//Question 5
function checkFirstAndLast(strToCheck){
    if(strToCheck.charAt(0) === strToCheck.charAt(strToCheck.length -1)){
        strToCheck = strToCheck.substring(1,strToCheck.length-1)
        console.log('Q5: ' + strToCheck)
    }
}

// checkFirstAndLast('hiifmh')
// checkFirstAndLast('hiifm')
// checkFirstAndLast('5fmh5')

//Question 6
function q6Function (q6String){
    if(q6String.indexOf('*') != -1){
        console.log(q6String.replace('*', ''))
    }
    if(q6String.indexOf('@') != -1){
        q6String = '@' + q6String + '@'
    }
    if(q6String.indexOf('₪') != -1){
        console.log('q6: new shekel')
    }
}
// q6Function('gre*jj')
// q6Function('@gggew')
// q6Function('gg₪g')