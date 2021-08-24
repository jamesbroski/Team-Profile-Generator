const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("getSchool", () => {
    it("should fill in what school intern is attended", () => {
      const newIntern = new Intern("James", "27", "jb@yahoo.com", "DU");

      expect(newIntern.school).toEqual("DU");
    });
  });
});
