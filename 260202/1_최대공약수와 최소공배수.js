// 최대공약수와 최소공배수
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12940

function solution(n, m) {
    // 최대 공약수 : 유클리드 호제법
    const getGCD = (a, b) => {
        while(b > 0){
            let r = a % b;
            a = b;
            b = r;
        }
        return a;
    }
    
    // 최소 공배수
    const getLCM = (a, b) => {
        return (a * b) / getGCD(a, b);
    }
    
    return [getGCD(n, m), getLCM(n, m)];
}