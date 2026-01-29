// 없는 숫자 더하기
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
    var answer = 0;
    for(var i = 1 ; i < 10 ; i++){
        if(!numbers.includes(i)) answer+=i;
    }
    return answer;
}

//reduce 사용에 1~9까지 더한 수에서 뺀다..
function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
