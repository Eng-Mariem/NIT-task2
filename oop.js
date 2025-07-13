class shape {
  constructor(name) {
    this.name = name;
  }

  getarea() {
    return 0;
  }

  getperimeter() {
    return 0;
  }

  tostring() {
    return `${this.name}: Area = ${this.getarea().toFixed(2)}, Perimeter = ${this.getperimeter().toFixed(2)}`;
  }
}

class circle extends shape {
  constructor(r) {
    super("circle");
    this.radius = r;
  }

  getarea() {
    return Math.PI * this.radius ** 2;
  }

  getperimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class rectangle extends shape {
  constructor(width, height) {
    super("rectangle");
    this.width = width;
    this.height = height;
  }

  getarea() {
    return this.width * this.height;
  }

  getperimeter() {
    return 2 * (this.width + this.height);
  }
}

class square extends shape {
  constructor(side) {
    super("square");
    this.side = side;
  }

  getarea() {
    return this.side * this.side;
  }

  getperimeter() {
    return 4 * this.side;
  }
}

export { shape, rectangle, square, circle };
