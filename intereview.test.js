const pyramid = require(`./interview`);

describe("example test", () => {
  it(`displays 1 height pyramid`, () => {
    expect(pyramid(1)).toEqual(["*"]);
  });
  it(`displays 3 height pyramid`, () => {
    expect(pyramid(3)).toEqual(["*", "***", "*****"]);
  });
});
