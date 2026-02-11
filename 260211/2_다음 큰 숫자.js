// 다음 큰 숫자
// LV.2
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
    var answer = n;
    const oneLength = (n).toString(2).split('1').length;
    
    do{
        answer++;
    }while(oneLength != (answer).toString(2).split('1').length)
    
    return answer;
}

function solution(n) {
    var answer = n;
    const oneLength = (n).toString(2).split('1').length;
    
    while(answer++) {
        if(oneLength == (answer).toString(2).split('1').length) return answer;
    }
}

//재귀..?
function solution(n,a=n+1) {
    return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length ? a : solution(n,a+1);
}