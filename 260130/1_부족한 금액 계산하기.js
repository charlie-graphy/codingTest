// 부족한 금액 계산하기
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
    var answer = 0;
    for(var i = 1 ; i <= count ; i++){
        answer+=price*i
    }
    if(money >= answer) return 0;

    return answer-money;
}