
timer_model = {
  elapsedSeconds: 0,
  timerRunning:   true,
  toggleLabel:    'Stop',

  handleTick: function(evt) {
    if (Store.timer.timerRunning) {
      Store.timer.elapsedSeconds = Store.timer.elapsedSeconds + 1;
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

