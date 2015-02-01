
timer_model = {
  minutes:        0,
  seconds:        0,
  displaySeconds: '00',
  timerRunning:   false,
  toggleLabel:    'Resume',

  setSubscriptions: function() {
    ea.subscribe('TICK', 'handleTick', Store.timer.handleTick);
    ea.subscribe('PAUSE_TOGGLE', 'handlePauseToggle', Store.timer.handlePauseToggle);
    ea.subscribe('START_TOGGLE', 'handleStartClick', Store.timer.handleStartClick);
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

  handleStartClick: function(evt) {
    Store.timer.minutes = 0;
    Store.timer.seconds = 0;
    Store.displaySeconds = '00';
    Store.timer.timerRunning = true;
    Store.timer.toggleLabel = "Pause";

    ea.publish('CHANGE');
  },

  handlePauseToggle: function(evt) {
    Store.timer.timerRunning = !Store.timer.timerRunning;
    if (Store.timer.timerRunning) {
      Store.timer.toggleLabel = "Pause";
    }
    else {
      Store.timer.toggleLabel = "Resume";
    }

    ea.publish('CHANGE');
  }
}

