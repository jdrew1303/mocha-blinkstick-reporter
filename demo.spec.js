describe("/sites", function() {
  it("spins round", done => {
    setTimeout(function() {
      console.log("Test");
      done();
    }, 1000);
  });
});
