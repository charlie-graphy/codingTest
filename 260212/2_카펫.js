// 카펫
// LV.2
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
    var answer = [];
    var sum = brown + yellow;
    
    for(var height =3 ; height <= brown ; height++ ){
        if(sum % height === 0){
            var weight = sum / height;
            
            if((height-2) * (weight-2) === yellow) return [weight, height];
        }
    }
    
    return answer;
}