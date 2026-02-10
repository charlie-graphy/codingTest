// 이진 변환 반복하기
// LV.2
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
    var dltZero = 0;
    var one = s;
    var answer = [0, 0];
    
    if(s == '1') return answer;
    
    for(var i = 1 ; one != '1' ; i++){
        dltZero += one.split(0).length-1;
        one = (one.replaceAll('0','').length).toString(2);
        answer = [i, dltZero];
    }
    
    return answer;
}

// 이런방법도 있군..
function solution(s) {
    var answer = [0,0];
    while(s.length > 1) {
        answer[0]++;
        answer[1] += (s.match(/0/g)||[]).length;
        s = s.replace(/0/g, '').length.toString(2);
    }
    return answer;
}