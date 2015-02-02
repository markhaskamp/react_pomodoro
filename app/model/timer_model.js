
timer_model = {
  minutes:        0,
  seconds:        0,
  displaySeconds: '00',
  timerRunning:   false,
  tmpDescription: '',
  description:    ' -- ',

  setSubscriptions: function() {
    ea.subscribe('TICK', 'handleTick', Store.timer.handleTick);
    ea.subscribe('START_TOGGLE', 'handleStartClick', Store.timer.handleStartClick);
    ea.subscribe('DESCRIPTION_CHANGED', 'handleDescriptionChanged', Store.timer.handleDescriptionChanged);
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
    Store.timer.description = Store.timer.tmpDescription;

    ea.publish('CHANGE');
  },

  handleDescriptionChanged: function(evt) {
    Store.timer.tmpDescription = $('#txtDescription').val();
  }
}

