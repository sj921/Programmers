function solution(hp) {
    let answer = Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + Math.floor(((hp % 5) % 3) / 1);    
    return answer;
}