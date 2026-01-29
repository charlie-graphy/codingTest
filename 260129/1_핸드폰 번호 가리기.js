// 핸드폰 번호 가리기
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
    var answer = phone_number.slice(0, -4).replace(/[0-9]/g,'*')+phone_number.slice(-4);
    
    return answer;
}

//정규식은 어렵다
function hide_numbers(s){
  return s.replace(/\d(?=\d{4})/g, "*");
}

//repeat함수를 이용하자!
function solution(phone_number) {
    var answer = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
    
    return answer;
}