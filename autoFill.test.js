//arrayList = ["Amazon", "Apple", "AWS","British Gas"]
const arrayList = ["Amazon", "Apple"];

const autoFill = require(`./autoFill`);

describe("az - 2 letter matches element in array", () => {
  it(`2 outputs`, () => {
    const arrayList = ["Amazon", "Azure", "Argos"];
    const value = "az";
    expect(autoFill(value, arrayList)).toEqual(["Amazon", "Azure"]);
  });
});

describe("az - 2 letter matches element in array", () => {
  it(`3 outputs`, () => {
    const arrayList = ["Amazon", "aZAZ", "Azure", "Argos"];
    const value = "az";
    expect(autoFill(value, arrayList)).toEqual(["Amazon", "aZAZ", "Azure"]);
  });
});

// describe("ar -2 letter matches element in array", () => {
//   it(`3 outputs`, () => {
//     const arrayList = ["Amazon", "Zaraz", "Azure", "Argos"]
//     const value = "ar";
//     expect(autoFill(value,arrayList)).toEqual([ "Zaraz","Argos"]);

//   });
// });
