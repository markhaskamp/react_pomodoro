
timer_model = {
  minutes:        0,
  seconds:        0,
  displaySeconds: '00',
  timerRunning:   false,
  toggleLabel:    'Restart',

  setSubscriptions: function() {
    ea.subscribe('TICK', 'handleTick', Store.timer.handleTick);
    ea.subscribe('PAUSE_TOGGLE', 'handleTimerToggle', Store.timer.handleTimerToggle);
  },

  handleTick: function(evt) {
    if (Store.timer.timerRunning) {
      Store.timer.seconds = Store.timer.seconds + 1;
      if (Store.timer.seconds === 60) {
        Store.timer.seconds = 0;
        Store.timer.minutes = Store.timer.minutes + 1;
      }
      Store.timer.displaySeconds = Store.timer.seconds < 10 ? '0' + Store.timer.seconds : Store.timer.seconds;

      ea.publish('CHANGE');
    }
  },

  handleTimerToggle: function(evt) {
    Store.timer.timerRunning = !Store.timer.timerRunning;
    if (Store.timer.timerRunning) {
      Store.timer.toggleLabel = "Pause";
    }
    else {
      Store.timer.toggleLabel = "Restart";
    }

    ea.publish('CHANGE');
  }
}

