const cloneArray = require(`./cloneArray`);

describe("example test", () => {
  it(`properly clones array`, () => {
    const array = [1, 2, 3];
    expect(cloneArray(array)).toEqual(array);
    expect(cloneArray(array)).not.toBe(array);
  });
});
