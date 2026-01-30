// 같은 숫자는 싫어
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr)
{
    var answer = [];

    for(var i = 0 ; i < arr.length ; i++){
        if(i+1 < arr.length && arr[i] != arr[i+1]) answer.push(arr[i]);
        else if(i+1 == arr.length) answer.push(arr[i]);
    }
    
    return answer;
}

// filter 하고 싶었는데 머리가 안굴러감...
function solution(arr)
{
    var answer = arr.filter((val,index) => val != arr[index+1]);
    
    return answer;
}