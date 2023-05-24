function solution(my_string, letter) {
    let str = my_string.split("");
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] == letter) {
            str[i] = "";
        }        
    }
  
    return str.join("");
}

/*
function solution(my_string, letter) {
    return my_string.replaceAll(letter, "");
}
*/
