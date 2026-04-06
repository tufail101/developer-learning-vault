describe("price formatting", () => {
  it("formats a number with a dollar sign", () => {
    const price = 19.99;
    expect(`$${price}`).toBe("$19.99");
  });
});
