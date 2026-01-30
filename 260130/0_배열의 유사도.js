// 배열의 유사도
// LV.0
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/120903

function solution(s1, s2) {
    
    var maxArr = s1.length > s2.length ? s1 : s2;
    var minArr = s1.length > s2.length ? s2 : s1;
    
    var length = minArr.filter((a) => maxArr.indexOf(a) > -1).length;
    
    console.log(length)
    return length;
}

// 필터를 아래처럼 써라.
function solution(s1, s2) {
    const intersection = s1.filter((x) => s2.includes(x));
    return intersection.length;
}