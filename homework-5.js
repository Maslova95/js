// 1

class Circle {
    constructor(x, y, radius) {
      this.x = x;
      this.y = y;
      this.radius = radius;
    }
  
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  
    static getCircumferenceByRadius(radius) {
      return 2 * Math.PI * radius;
    }
  
    getCopy() {
      return new Circle(this.x, this.y, this.radius);
    }
  
    static getCircleByParams(x, y, radius) {
      return new Circle(x, y, radius);
    }
  
    isPointInside(x, y) {
      const distance = Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2);
      return distance <= this.radius;
    }
  
    toString() {
      return `Circle: Center(${this.x}, ${this.y}), Radius: ${this.radius}`;
    }
  }
  
  // Приклад 
  const circle1 = new Circle(0, 0, 5);
  console.log(circle1.getCircumference()); // Виведе: 31.41592653589793
  console.log(Circle.getCircumferenceByRadius(5)); // Виведе: 31.41592653589793
  const circle2 = circle1.getCopy();
  console.log(circle2.toString()); // Виведе: Circle: Center(0, 0), Radius: 5
  console.log(circle1.isPointInside(2, 2)); // Виведе: true
  console.log(circle1.isPointInside(6, 6)); // Виведе: false
  console.log(circle1.toString()); // Виведе: Circle: Center(0, 0), Radius: 5

//   2

function propsCount(currentObject) {
    return Object.keys(currentObject).length;
  }
  
  let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
  };
  
  console.log(propsCount(mentor)); // Виведе: 3

//   3

class Person {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
  
    showFullName() {
      console.log(this.name + " " + this.surname);
    }
  }
  
  class Student extends Person {
    constructor(name, surname, yearOfAdmission) {
      super(name, surname);
      this.yearOfAdmission = yearOfAdmission;
    }
  
    showFullName(middleName) {
      console.log(this.surname + " " + this.name + " " + middleName);
    }
  
    showCourse() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.yearOfAdmission + 1;
    }
  }
  
  const stud1 = new Student("Petro", "Petrenko", 2019);
  console.log(stud1.showFullName("Petrovych")); // Виведе: Petrenko Petro Petrovych
  console.log("Current course: " + stud1.showCourse()); // Виведе: Current course: 4

//   4

// A
class SimpleMarker {
    constructor(color, inkLevel) {
      this.color = color;
      this.inkLevel = inkLevel;
    }
  
    printText(text) {
      let printedText = "";
      for (let char of text) {
        if (char !== " " && this.inkLevel > 0) {
          printedText += char;
          this.inkLevel -= 0.5;
        } else {
          printedText += " ";
        }
      }
      console.log(printedText);
    }
  }
  
  // Приклад 
  const marker = new SimpleMarker("blue", 50);
  marker.printText("Hello, world!"); 
// B
class RefillableMarker extends SimpleMarker {
    refill(inkAmount) {
      if (this.inkLevel + inkAmount > 100) {
        this.inkLevel = 100;
      } else {
        this.inkLevel += inkAmount;
      }
    }
  }
  
  // Приклад 
  const refillableMarker = new RefillableMarker("red", 75);
  console.log(refillableMarker.inkLevel); 
  refillableMarker.printText("Lorem ipsum dolor sit amet"); 
  console.log(refillableMarker.inkLevel); 
  refillableMarker.refill(30);
  console.log(refillableMarker.inkLevel); 

//   5

class Worker {
    constructor(fullName, dayRate, workingDays) {
      this.fullName = fullName;
      this.dayRate = dayRate;
      this.workingDays = workingDays;
      this.experience = 1.2;
    }
  
    showSalary() {
      const salary = this.dayRate * this.workingDays;
      console.log(`${this.fullName} salary: ${salary}`);
    }
  
    showSalaryWithExperience() {
      const salary = this.dayRate * this.workingDays * this.experience;
      console.log(`${this.fullName} salary: ${salary}`);
    }
  
    get showExp() {
      return this.experience;
    }
  
    set setExp(value) {
      this.experience = value;
    }
  }
  
  let worker1 = new Worker("John Johnson", 20, 23);
  console.log(worker1.fullName);
  worker1.showSalary();
  console.log("New experience: " + worker1.showExp);
  worker1.showSalaryWithExperience();
  worker1.setExp = 1.5;
  console.log("New experience: " + worker1.showExp);
  worker1.showSalaryWithExperience();
  
  let worker2 = new Worker("Tom Tomson", 48, 22);
  let worker3 = new Worker("Andy Ander", 30, 22);
  
  let workers = [worker1, worker2, worker3];
  
  // Приклад 
  workers.sort((a, b) => {
    const salaryA = a.dayRate * a.workingDays * a.experience;
    const salaryB = b.dayRate * b.workingDays * b.experience;
    return salaryA - salaryB;
  });
  
  console.log("Sorted salary:");
  for (const worker of workers) {
    const salary = worker.dayRate * worker.workingDays * worker.experience;
    console.log(`${worker.fullName}: ${salary}`);
  }
  
  
  