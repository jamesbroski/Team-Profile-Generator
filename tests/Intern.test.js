const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("checkSchoolAttr", () => {
    it("should fill in what school intern is attended", () => {
      const newIntern = new Intern("James", "27", "jb@yahoo.com", "CSU");

      expect(newIntern.school).toEqual("CSU");
    });
  });
  describe("getSchool", () => {
    it("should fill in what school intern is attended", () => {
      const newIntern = new Intern("James", "27", "jb@yahoo.com", "DU");

      expect(newIntern.getSchool()).toEqual("DU");
    });
  });

  describe("getRole", () => {
    it("should return as intern", () => {
      const newIntern = new Intern();

      expect(newIntern.getRole()).toEqual("Intern");
    });
  });
});
