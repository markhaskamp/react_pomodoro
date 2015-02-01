
timer_model = {
  minutes:      25,
  seconds:      '00',
  timerRunning: false,
  toggleLabel:  'Start',

  setSubscriptions: function() {
    ea.subscribe('TICK', 'handleTick', Store.timer.handleTick);
    ea.subscribe('TIMER_TOGGLE', 'handleTimerToggle', Store.timer.handleTimerToggle);
  },

  handleTick: function(evt) {
    if (Store.timer.timerRunning) {
      Store.timer.seconds = Store.timer.seconds - 1;
      if (Store.timer.seconds === -1) {
        Store.timer.seconds = 59;
        Store.timer.minutes = Store.timer.minutes - 1;
      }
      Store.timer.seconds = Store.timer.seconds < 10 ? "0" + Store.timer.seconds : Store.timer.seconds;

      ea.publish('CHANGE');
    }
  },

  handleTimerToggle: function(evt) {
    Store.timer.timerRunning = !Store.timer.timerRunning;
    if (Store.timer.timerRunning) {
      Store.timer.toggleLabel = "Stop";
    }
    else {
      Store.timer.toggleLabel = "Start";
    }

    ea.publish('CHANGE');
  }
}

