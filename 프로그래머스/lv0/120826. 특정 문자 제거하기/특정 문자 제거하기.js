function solution(my_string, letter) {
    my_string = my_string.split("");
    
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] == letter) {
            my_string[i] = "";
        }        
    }  
    return my_string.join("");
}