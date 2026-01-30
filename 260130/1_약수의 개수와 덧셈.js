// 약수의 개수와 덧셈
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
    var answer = 0;
    
    for(var i = left ; i <= right ; i++){
        var length = 0;
        for(var j = 1 ; j <= i ; j++){
            if(i%j == 0) length++;
        }
        answer+= (length%2 == 0 ? i : -i)
    }
    return answer;
}

// 제곱근이 정수면 약수의 개수가 홀수다...
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}