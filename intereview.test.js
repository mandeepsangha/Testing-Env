const pyramid = require(`./interview`);

describe("example test", () => {
  it(`displays 1 height pyramid`, () => {
    expect(pyramid(1)).toEqual(["*"]);
  });
  it(`displays 3 height pyramid`, () => {
    expect(pyramid(3)).toEqual(["*", "***", "*****"]);
  });
  it(`displays 5 height pyramid`, () => {
    expect(pyramid(5)).toEqual(["*", "***", "*****", "*******", "*********"]);
  });
  it(`return error message when input is not a number`, () => {
    expect(pyramid("bar")).toBe("input needs to be a number");
  });
  it(`input is zero`, () => {
    expect(pyramid(0)).toEqual([]);
  });
});
