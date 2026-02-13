// N개의 최소공배수
// LV.2
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12953

function solution(arr) {
  const getGCD = (a, b) => { // 최대 공약수
    if (b === 0) return a;
    return getGCD(b, a % b);
  };

  const getLCM = (a, b) => { // 최소 공배수
    return (a * b) / getGCD(a, b);
  };

  const result = arr.reduce((LCM, curr) => getLCM(LCM, curr));

  return result;
}

//앞에 두개의 최소 공배수 그다음 값과의 최소공배수 해서 계산.. 어렵다..