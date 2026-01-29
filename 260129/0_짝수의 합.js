// 짝수의 합
// LV.0
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/120831

function solution(n) {
    var answer = 0;
   
    for(var i = 0 ; i <= n ; i++){
        answer += i%2 == 0 ? i : 0;
    }
    
    return answer;
}

//수열 공식..
function solution(n) {
    var half = Math.floor(n/2);
    return half*(half+1);
}

//하.. 짝수면 2로 시작하면됏네..
function solution(n) {
    var answer = 0;
   
    for(var i = 2 ; i <= n ; i+=2){
        answer += i;
    }
    
    return answer;
}