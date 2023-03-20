class Triangle {// difine with capitol letter
    constructor(a,b,c){// don't return a value from constructor
        for(let side of [a,b,c]){
        if(!Number.isFinite(side)|| side<= 0){
            throw new Error ('sides must be positive numbers');
        }
    }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    greet(){ // methods are added to prototype
        console.log('hello');
    }
    display(){
        console.log(`Triangle with sides of ${this.a}, ${this.b} and ${this.c}`)
    }
    getArea() {
        const {a,b,c} = this;
        const s = (a + b + c) / 2;
        return Math.sqrt(s *[s - a] * [s - b] * [s - c]);
    }
    isBig(){
       return this.getArea() > 50;
    }
};

const firstTri = new Triangle(8,10,12);
const secondTri = new Triangle(4,5,6);
const thirdTri = new Triangle(17,25,33);

class RightTriangle extends Triangle {// difine with capitol letter
    constructor(a,b,c){// don't return a value from constructor
        if(a * a + b * b !== c * c){
            throw new Error ('Invalid C side of triangle')
        }
        super(a,b,c);
        this.hypot = c;
    }
}


