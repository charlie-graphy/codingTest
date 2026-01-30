// 제일 작은 수 제거하기
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
    var numArr = arr.filter(a => a > Math.min(...arr));
    var answer = arr.length == 1 ? [-1] : numArr;
    return answer;
}

//indexOf 방법
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1) return[-1];
    return arr;
}