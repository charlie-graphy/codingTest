// 점의 위치 구하기
// LV.0
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/120841

function solution(dot) {
    if(Math.sign(dot[0]) == 1){
        if(Math.sign(dot[1]) == -1) return 4;
        else return 1;
    }else{
        if(Math.sign(dot[1]) == -1) return 3;
        else return 2;
    }
}

// 오.. 구조 분해
function solution(dot) {
    const [num,num2] = dot;
    const check = num * num2 > 0;
    return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}