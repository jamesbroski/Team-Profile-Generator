const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("checkGithub", () => {
    it("should fill in github username", () => {
      const newEngineer = new Engineer(
        "Jonny",
        "31",
        "jnny@yahoo.com",
        "jonnydude"
      );

      expect(newEngineer.github).toEqual("jonnydude");
    });
  });
  describe("getGithub", () => {
    it("should fill in github username", () => {
      const newEngineer = new Engineer(
        "Jonny",
        "31",
        "jnny@yahoo.com",
        "jonnydude"
      );

      expect(newEngineer.getGithub()).toEqual("jonnydude");
    });
  });

  describe("getRole", () => {
    it("should return as engineer", () => {
      const newEngineer = new Engineer();

      expect(newEngineer.getRole()).toEqual("Engineer");
    });
  });
});
