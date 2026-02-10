// 최솟값 만들기
// LV.2
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12941

function solution(A,B){
    var answer = 0;
    var aList = A.sort((a,b) => a-b);
    var bList = B.sort((a,b) => b-a);
    
    for(var i = 0 ; i < aList.length; i++){
        answer+=aList[i]*bList[i];
    }

    return answer;
}

//아 값 따로 안저장해도 바뀔수잇구나 reduce 이용
function solution(A,B){
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    return A.reduce((total, val, idx) => total + val * B[idx], 0)
}