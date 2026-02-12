// 구명보트
// LV.2
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
    var count = people.length;
    var i = 0;
    var j = people.length - 1;
    
    people.sort((a, b) => a-b);
    
    while(i<j){
        if(people[i]+people[j] <= limit){
            count--;
            i++;
            j--;
        }else j--;
    }
    
    return count;
}

//위 방법 쉽게 풀기..
function solution(people, limit) {
    people.sort((a, b) => a - b);
    
    for(var i=0, j=people.length-1; i < j; j--) {
        if( people[i] + people[j] <= limit ) i++;
    }
    
    return people.length-i;
}


// 나는 너무 꼬아 생각하는 경우가 있다... 여유롭게 침착하게 풀어보자..