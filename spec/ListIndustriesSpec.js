/* globals testdata, greenjobs, listIndustries, noString */

describe("ListIndustries", function() {
  var testdata = greenjobs.splice(0, 10);

  it("should list all the industries in the dataset without duplicates", function() {
    var a = ["Construction", "Agriculture, Forestry, Fishing and Hunting "];

    expect(listIndustries(testdata)).toEqual(a);
  });

  var noIndustryField = testdata.concat({foo:"bar"});

  it("should throw an error when a record does not have the Industry field", function() {
    expect(function(){listIndustries(noIndustryField);}).toThrowError("No Industry field.");
  });

  var noStringIndustry = testdata.concat({"Industy":""});

  it("should throw an error when a record is an empty string in the Industry field", function() {
    expect(function(){noString(noStringIndustry);}).toThrowError("No string Industry.");
  });
});

