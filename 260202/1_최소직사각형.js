// 최소직사각형
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
    var answer = 0;
    var maxW = 0;
    var maxH = 0;
    
    for(var i = 0 ; i < sizes.length ; i++){
        const [a, b] = sizes[i].sort((a, b) => a - b);
        maxW = maxW < a ? a : maxW;
        maxH = maxH < b ? b : maxH;
    }
    
    answer = maxW*maxH;
    return answer;
}

// Math.max로 사용해도되지않나
function solution(sizes) {
    var answer = 0;
    var wArr = [];
    var hArr = [];
    
    for(var i = 0 ; i < sizes.length ; i++){
        sizes[i].sort((a, b) => a - b);
        wArr.push(sizes[i][0]);
        hArr.push(sizes[i][1]);
    }
    
    answer = Math.max(...wArr)*Math.max(...hArr);
    return answer;
}

// reduce와 Math.max 합작..
function solution(sizes) {
    const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
    return hor * ver;
}