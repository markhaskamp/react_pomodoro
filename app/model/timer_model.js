
timer_model = {
  elapsedSeconds: 25 * 60,
  timerRunning:   false,
  toggleLabel:    'Start',

  setSubscriptions: function() {
    ea.subscribe('TICK', 'handleTick', Store.timer.handleTick);
    ea.subscribe('TIMER_TOGGLE', 'handleTimerToggle', Store.timer.handleTimerToggle);
  },

  handleTick: function(evt) {
    if (Store.timer.timerRunning) {
      Store.timer.elapsedSeconds = Store.timer.elapsedSeconds - 1;
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

