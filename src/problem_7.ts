class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    carAge(): number {
      const currentYear = new Date().getFullYear(); 
      return currentYear - this.year; 
    }
  }
  
  const car = new Car("Royal Enfield", "Hunter", 2023);
  