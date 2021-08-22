const sum = (a, b) => {
    return a + b;
}

const reverse = (arr) => {
    return arr.reverse();
}

const returnDummyString = () => "dummy";

group("test group", () => {
    const r1 = sum(1, 2);
    test("1 + 2 should be 3", r1).toBe(3);
    
    const r2 = returnDummyString();
    test("result should be string", typeof r2).toBe("string");

    const r3 = reverse([1,2,3]);
    test("should reverse array", r3).toBe([4,2,1]);

});