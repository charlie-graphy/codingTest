// 삼총사
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/131705

function solution(number) {
    var answer = 0;
    
    for(var i = 0 ; i < number.length ; i++){
        for(var j = i+1 ; j < number.length ; j++){
            for(var k = j+1 ; k < number.length ; k++){
                if(number[i]+number[j]+number[k] == 0) answer++;
            }
        }
    }
    
    return answer;
}