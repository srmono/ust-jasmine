function Calculator(){
    this.total = 0
}
Calculator.prototype.add = function(numer){
    return (this.total += numer)
}

Calculator.prototype.substract = function(numer){
    return (this.total -= numer)
}

Calculator.prototype.multiply = function(numer){
    return (this.total *= numer)
}

Calculator.prototype.devide = function(numer){
    if (numer === 0){
        throw new Error("Number can;t be zero")
    }
    return (this.total /= numer)
}
