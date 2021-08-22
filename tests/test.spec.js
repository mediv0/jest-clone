const sum = (a, b) => {
    return a + b;
}

group("group-1", () => {
    const r1 = sum(1, 2);
    test("1 + 2 should be 3", r1).toBe(3);
});