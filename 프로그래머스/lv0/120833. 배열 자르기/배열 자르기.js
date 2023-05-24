function solution(numbers, num1, num2) { 
    return numbers.slice(num1, num2+1);
}


// function solution(numbers, num1, num2) {
//     let answer = [];
    
//     for (let i = num1; i <= num2; i++) {
//         answer.push(numbers[i]);        
//         console.log("i : " + i);
//         console.log("numbers[i] : " + numbers[i]);
//     }    
    
//     return answer;
// }