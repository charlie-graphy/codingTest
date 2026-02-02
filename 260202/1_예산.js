// 예산
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
    var answer = 0;
    const dArr = d.sort((a, b) => a - b);
    
    d.forEach(function(v){
        budget-=v
        if(budget >= 0) answer++;
        else return answer;
    });
    return answer;
}
