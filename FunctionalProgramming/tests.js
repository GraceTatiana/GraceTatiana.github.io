" use strict";

describe("Arithmetic expressions", () => {
    describe("sum", () => {
        it("sums all the numbers in an array of numbers", () => 
            assert.equal(100, sum([10,20,30,40]))
        );
    });
  describe("multiply", () => {
        it("multiplies all the numbers in an array of numbers", () =>
            assert.equal(25, multiply([1,5,5]))
        );
    });

});

describe("reverse ", () => {
    it("computes the reversal of a string", () =>
        assert.equal("melasureJ", reverse ("Jerusalem"))
    );
});
    describe("filterLongWords", () => {
        // it(" takes an array of words and an integer i and returns the array of words that are longer", () =>{
        //    expect(["Tatiana","Nakalema"]).to.have.members(filterLongWords(["Tatiana", "Grace", "Nakalema"], 5))
           it("filterLongWords takes an array of words and an integer i and returns the array of words that are longer than i.", () => {
            expect(["Threes", "Configure"]).to.eql(filterLongWords(["One", "Threes", "Configure", "xylem"], 5));
        
    
         });
    });

