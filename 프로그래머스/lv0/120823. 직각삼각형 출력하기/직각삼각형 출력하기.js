// readline 모듈 불러오기
const readline = require('readline');

// 인터페이스 객체 만들기
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

// 입출력 코드 작성하기
rl.on('line', function (line) {
	// 입력 받은 값을 처리하는 코드
    input = line.split(' ');
}).on('close', function () {
	// 입력이 끝나고 실행하는 코드
    // console.log(Number(input[0]));
    for (let i = 1; i <= input[0]; i++) {
        console.log('*'.repeat(i));
    }
});

// 실행하고 종료할 때마다 i의 값이 증가하고 각 줄마다 *이 추가로 생성된다