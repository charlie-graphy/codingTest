// 최댓값과 최솟값
// LV.2
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
    const min = s.split(' ').sort((a, b) => a-b)[0]
    const max = s.split(' ').sort((a, b) => a-b)[s.split(' ').length-1];
    const answer = min+' '+max;
    
    return answer;
}

// 왜 생각은 했는데 ...을 기억을 못할까..
function solution(s) {
    const arr = s.split(' ');

    return Math.min(...arr)+' '+Math.max(...arr);
}