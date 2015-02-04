describe("given timer_model", function() {

  describe("when init", function() {
    it("then should be defined", function() {
      expect(timer_model).toBeDefined();
    });

    it("then minutes = 0", function() {
      expect(timer_model.minutes).toEqual(0);
    });

    it("then seconds = 0", function() {
      expect(timer_model.seconds).toEqual(0);
    });

    it("then startButtonLabel = 'Start'", function() {
      expect(timer_model.startButtonLabel).toEqual("Start");
    });

    it("then timerRunning = false", function() {
      expect(timer_model.timerRunning).toEqual(false);
    });
  });

  describe("given handleTick()", function() {
    describe("when timer is running", function() {
      timer_model.timerRunning = true;

      it("then seconds + 1", function() {
        timer_model.handleTick();

        expect(timer_model.seconds).toEqual(1);
      });
    });
  });

});

