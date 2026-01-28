// 하샤드 수
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
    var answer = true;
    var sum = 0;
    String(x).split('').forEach(function(v){
        sum+=Number(v);
    });
    if(x%sum != 0) answer = false;
    
    return answer;
}

//reduce 응용!
function solution(x) {
    var answer = ! (x % String(x).split('').reduce((a, b) => +b + +a));
    
    return answer;
}