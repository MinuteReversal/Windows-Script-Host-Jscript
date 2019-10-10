namespace DemoCar {
    class Car {
        color: string = "red";
        constructor() {

        }
        drive() {
            WScript.Echo(`${this.color} car are go.`);
        }
    }

    new Car().drive();

    class FlyCar extends Car {
        fly() {
            WScript.Echo(`${this.color} car can fly.`);
        }
    }

    new FlyCar().fly();
}