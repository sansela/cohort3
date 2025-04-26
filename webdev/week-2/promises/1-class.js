class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    area() {
        return this.height * this.width
    }

    printThis() {
        console.log(this);
    }
}

const rect = new Rectangle(2, 3);
console.log('area is: ' + rect.area());
console.log(rect.printThis());