// 각도기
// LV.0
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/120829

function solution(angle) {
    var answer = angle < 90 ? 1 : angle == 90 ? 2 : angle < 180 ? 3 : 4;
    return answer;
}

// 아래와 같이 필터를 응용할 수 있다!
function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle>=x).length;
}