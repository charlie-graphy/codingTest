// 평균 구하기
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
    var answer = 0;
    arr.forEach(function(v){
        answer+=v;
    });
    answer = answer/arr.length
    return answer;
}

//ES6 문법
//reduce() 배열의 누적 계산할 때 주로 사용 최대,최소값 계산에도 사용
function solution(arr) {
    var answer = arr.reduce((a,b) => a+b) / arr.length;
    return answer;
}