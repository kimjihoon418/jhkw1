const { avg, prime, factorial } = require("./jhkw1/lib");

test("3,5,7의 평균 : ", () => {
    const result = avg([3, 5, 7]);
    console.log("3,5,7의 평균:", result);
    expect(result).toBe(5);
});

test("5는 소수? : ", () => {
    const result = prime(5);
    console.log("5는 소수?", result);
    expect(result).toBe(true);
});

test("5!의 값 : ", () => {
    const result = factorial(5);
    console.log("5!의 값:", result);
    expect(result).toBe(120);
});