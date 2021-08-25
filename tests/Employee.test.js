const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("checkName", () => {
    it("should return employee name", () => {
      const newEmployee = new Employee("Name", "ID", "Email");

      expect(newEmployee.name).toEqual("Name");
    });
  });
  describe("checkId", () => {
    it("should return employee id", () => {
      const newEmployee = new Employee("Name", "ID", "Email");

      expect(newEmployee.id).toEqual("ID");
    });
  });
  describe("checkEmail", () => {
    it("should return employee email", () => {
      const newEmployee = new Employee("Name", "ID", "Email");

      expect(newEmployee.email).toEqual("Email");
    });
  });
  describe("getName", () => {
    it("should return employee name", () => {
      const newEmployee = new Employee("Name", "ID", "Email");

      expect(newEmployee.getName()).toEqual("Name");
    });
  });

  describe("getId", () => {
    it("should return employee id", () => {
      const newEmployee = new Employee("Name", "ID", "Email");

      expect(newEmployee.getId()).toEqual("ID");
    });
  });
  describe("getEmail", () => {
    it("should return employee email", () => {
      const newEmployee = new Employee("Name", "ID", "Email");

      expect(newEmployee.getEmail()).toEqual("Email");
    });
  });
  describe("getRole", () => {
    it("should return as employee", () => {
      const newEmployee = new Employee();

      expect(newEmployee.getRole()).toEqual("Employee");
    });
  });
});
