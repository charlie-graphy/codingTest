// 숫자의 표현
// LV.2
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
    var answer = 1;
    
    for(var i = 1; i < Math.ceil(n/2); i++){
        var sum = 0;
        
        for(var j = i ; j < n ; j++){
            sum+=j;
            if(sum == n){
                answer++;
                break;
            }
            if(sum+j > n) break;
        }
    }
    
    return answer;
}

// 왜 효율성이 돌릴 때마다 결과가 다른가....
