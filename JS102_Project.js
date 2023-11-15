class Vehicle {
    constructor(name, manufacturer, ID) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.ID = ID;
       }
  }
  

  class Car extends Vehicle {
    constructor(name, manufacturer, ID, type) {
      super(name, manufacturer, ID);
      this.type = type;
      }
   }
  
 
  class Airplane extends Vehicle {
    constructor(name, manufacturer, ID, airplaneType) {
      super(name, manufacturer, ID);
      this.airplaneType = airplaneType;
    }
  }
  
  
  class Employee {
    constructor(name, ID, dob) {
      this.name = name;
      this.ID = ID;
      this.dob = dob;
      }
   }
  

  class Driver extends Employee {
    constructor(name, ID, dob, licenseID) {
      super(name, ID, dob);
      this.licenseID = licenseID;
    }
  }
  
  
  class Pilot extends Employee {
    constructor(name, ID, dob, licenseID) {
      super(name, ID, dob);
      this.licenseID = licenseID;
    }
   }
  
  class Reservation {
    constructor(reservationDate, employeeId, vehicleId, reservationID) {
      this.reservationDate = reservationDate;
      this.employeeId = employeeId;
      this.vehicleId = vehicleId;
      this.reservationID = reservationID;
    }
     }
  
 
  const vehicles = [
    new Car("Car1", "Toyota", 1, "Electric"),
    new Car("Car2", "Hyundai", 2, "Gas"),
    new Car("Car3", "Nissan", 3, "Electric"),
    new Airplane("Plane1", "Manufacturer4", 4, "Land"),
    new Airplane("Plane2", "Manufacturer5", 5, "Sea")
   ];
  const employees = [
    new Driver("Driver1", 101, "01/01/1980", "D123"),
    new Driver("Driver2", 102, "05/15/1985", "D456"),
    new Pilot("Pilot1", 201, "03/10/1975", "P123")
    ];


  const reservations = [];
  
  
  function makeReservation(employeeId, vehicleId) {
    const employee = employees.find(function(emp) { return emp.ID === employeeId; });
    const vehicle = vehicles.find(function(veh) { return veh.ID === vehicleId; });
  
    if (employee instanceof Pilot && vehicle instanceof Car) {
      console.log("Pilots cannot drive cars.");
    } else if (employee instanceof Pilot && vehicle instanceof Airplane) {
      const reservation = new Reservation(
        new Date().toLocaleDateString(),
        employeeId,
        vehicleId,
        reservations.length + 1
      );
      reservations.push(reservation);
      console.log("Reservation successfully made for Pilot.");
    } else if (employee instanceof Driver && vehicle instanceof Car) {
      const reservation = new Reservation(
        new Date().toLocaleDateString(),
        employeeId,
        vehicleId,
        reservations.length + 1
      );
      reservations.push(reservation);
      console.log("Driver Reservation success.");
    } else {
      console.log("Invalid combination of employee and vehicle.");
      }
   }
   
 
  makeReservation(101, 2); // Driver Reservation success
  makeReservation(201, 1); // Pilots cannot drive cars.
  
  console.log("Reservations:");
  reservations.map(reservation => console.log(reservation));