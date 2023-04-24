function solution(array) {
    array = array.sort((a, b) => a - b);
    let center = Math.floor(array.length / 2);
    return array[center];
}