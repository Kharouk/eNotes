(function(exports) {
  let Test = new Assert();

  function testCheckIfArray() {
    let testNote = new Note();
    Test.isArray(testNote.returnNotes());
  }

  function testAddNote() {
    let testNote = new Note();
    Test.expect(testNote.addNote("create a framework"));
    Test.toEqual("create a framework");
  }

  function testFindNote() {
    let testNote = new Note();
    testNote.addNote("write unit test");
    testNote.addNote("worry about feature tests");
    Test.expect(testNote.findNote("worry about feature tests"));
    Test.toEqual("worry about feature tests");
  }

  testFindNote();
  testCheckIfArray();
  testAddNote();
})(this);

/* if(testNote.returnNotes === []) <- this fails because 
it's actually an object rather than array */
