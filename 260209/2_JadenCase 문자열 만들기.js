// JadenCase 문자열 만들기
// LV.2
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12951

function getWord(str) {
    switch(str) {
        case "":
        case " ":
            return str
        default:
            return str[0].toUpperCase() + str.slice(1).toLowerCase()
    }
}

function solution(s) {
    return s.split(" ").map(getWord).join(" ")
}


function solution(s) {
    var answer = s.split(" ");

    for(var i=0; i<answer.length; i++){
        answer[i] = answer[i].substring(0,1).toUpperCase() + answer[i].substring(1).toLowerCase();
    }

    return answer.join(" ");
}