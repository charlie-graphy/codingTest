// 시저 암호
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
    var answer = '';
    
    for(var i = 0 ; i < s.length ; i++){
        var cd = s.charCodeAt(i);
        
        if(cd >= 65 && cd <= 90){
            cd+=n;
            if(cd > 90) cd-=26;
        }else if(cd >= 97 && cd <= 122){
            cd+=n;
            if(cd > 122) cd-=26;
        }
        
        answer+= String.fromCharCode(cd);
    }
    
    return answer;
}

//아스키 코드 없이
function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(var i =0; i <s.length; i++){
        var text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text)+n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}