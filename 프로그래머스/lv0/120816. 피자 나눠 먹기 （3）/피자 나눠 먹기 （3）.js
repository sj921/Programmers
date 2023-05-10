function solution(slice, n) {
    return (n % slice == 0) ? (n / slice) : Math.trunc(n / slice) + 1;
}