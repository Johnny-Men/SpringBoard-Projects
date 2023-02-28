describe("calculateTaxes tests", function (){
    it("Should calculate the high tax bracket", function (){
     expect(calculateTaxes (50000)).toEqual(12500);
     expect(calculateTaxes (100000)).toEqual(25000);
    })

    it("Should calculate the low tax bracket", function() {
     expect(calculateTaxes(20000)).toEqual(3000);
     expect(calculateTaxes(10000)).toEqual(1500);
    })      
})

describe("Removes duplicate letters and numbers", function(){
    it("Should remove duplicates from an array", function (){
     expect(removeDupes([1,1,2,2,3,4])).toEqual([1,2,3,4]);
     expect(removeDupes([1,2,3])).toEqual([1,2,3]);
    })

    it("Should remove duplicates from a string", function (){
     expect(removeDupes("hello")).toEqual("helo");
     expect(removeDupes("hello")).toBeInstanceOf(String);
    })
})

describe("remove key value from array", function (){
    it("Should remove value form array", function (){
     expect(remove([1,2,3,4,5,6], 6)).not.toContain(6);
    })
})

afterEach(function(){

})

beforeEach(() => {

})