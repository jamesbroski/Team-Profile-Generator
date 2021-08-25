const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("checkOfficeNumber", () => {
    it("should fill in the office number", () => {
      const newManager = new Manager("Jimmy", "10", "jmy@yahoo.com", "178");

      expect(newManager.officeNumber).toEqual("178");
    });
  });
  describe("getRole", () => {
    it("should return as manager", () => {
      const newManager = new Manager();

      expect(newManager.getRole()).toEqual("Manager");
    });
  });
});
