// 행렬의 덧셈
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
    var answer = arr1;
    for(var i = 0 ; i < arr1.length ; i++){
        for(var j = 0 ; j < arr1[i].length ; j++){
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    
    return answer;
}

//이게뭐냐..map..
function sumMatrix(A,B){
    return A.map((arr1, idx1) => arr1.map((val, idx2) => val+B[idx1][idx2]));
}