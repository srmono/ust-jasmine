xdescribe("calculator test suite", function(){
    it("Should add number to the total", function(){
        //expect(5 + 5).toBe(10)
        const calculator = new Calculator();
        calculator.add(5)
        //Expect total to be 5
        expect(calculator.total).toBe(5)
    });

    xit("Should substract number from the total", function(){
        //
    });
    it("Should multiply number with the total", function(){
        //
    });
    it("Should devide number by the total", function(){
        //
    });
})