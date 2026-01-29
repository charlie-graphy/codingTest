// 자릿수 더하기
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n)
{
    var answer = 0;
    
    String(n).split('').forEach(function(v){
       answer+=+v; 
    });

    return answer;
}
//reduce 활용
function solution(n)
{
    var answer = (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0);

    return answer;
}