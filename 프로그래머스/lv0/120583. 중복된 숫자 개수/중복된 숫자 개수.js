function solution(array, n) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) {
            newArr.push(array[i]);
        }
    }
    return newArr.length;
}