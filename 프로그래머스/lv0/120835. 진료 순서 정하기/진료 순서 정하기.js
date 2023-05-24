function solution(emergency) {
    let answer = [...emergency]; // emergeny배열을 복사하여 새로운 배열인 answer에 할당
    answer.sort((a, b) => b-a); // answer배열을 내림차순으로 정렬
    return emergency.map(n => answer.indexOf(n) + 1);   // 순위는 1부터 시작하므로 1을 더해줌
}