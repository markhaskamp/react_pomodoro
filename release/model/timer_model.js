
timer_model = {
  minutes:        0,
  seconds:        0,
  timerRunning:   false,
  description:    ' -- ',
  startButtonLabel: 'Start',
  className: 'form-control description',
  isBreak:        false,
  goalMinutes:    25,
  pomoTypeLabelClass:      'col-md-1 typeLabel selected',
  breakTypeLabelClass:     'col-md-1 typeLabel',
  longBreakTypeLabelClass: 'col-md-2 typeLabel',

  setSubscriptions: function() {
    ea.subscribe('TICK',          'handleTick',       Store.timer.handleTick);
    ea.subscribe('START_CLICKED', 'handleStartClick', Store.timer.handleStartClick);
    ea.subscribe('SET_TYPE',      'handleSetType',    Store.timer.handleSetType);
  },

  handleTick: function(evt) {
    if (Store.timer.timerRunning) {
      Store.timer.seconds = Store.timer.seconds + 1;
      if (Store.timer.seconds === 60) {
        Store.timer.seconds = 0;
        Store.timer.minutes = Store.timer.minutes + 1;
      }

      if (Store.timer.minutes >= Store.timer.goalMinutes) {
        ndx = Math.floor(Store.timer.seconds / 4);
        Store.timer.className = 'form-control description warning' + ndx;
      }

      ea.publish('CHANGE');
    }
  },


  handleStartClick: function(evt) {
    if (!Store.timer.timerRunning) {
      Store.timer.minutes = 0;
      Store.timer.seconds = 0;
      Store.timer.description = $('#txtDescription').val();
      Store.timer.startButtonLabel = 'Stop';
      Store.timer.timerRunning = !Store.timer.timerRunning;
      ea.publish('CHANGE');
    }
    else {
      Store.timer.startButtonLabel = 'Start';
      Store.timer.className = 'form-control description';
      Store.timer.timerRunning = !Store.timer.timerRunning;
      ea.publish('POMO_COMPLETED', {isBreak: timer_model.isBreak, minutes: timer_model.minutes, seconds: timer_model.seconds, description: Store.timer.description});

      Store.timer.minutes = 0;
      Store.timer.seconds = 0;

      ea.publish('CHANGE');
    }
  },

  handleSetType: function(evt) {
    type = evt[0].type;

    if (type === 'pomodoro') {
      Store.timer.isBreak = false;
      Store.timer.goalMinutes = 25;
      Store.timer.pomoTypeLabelClass="col-md-1 typeLabel selected";
      Store.timer.breakTypeLabelClass="col-md-1 typeLabel";
      Store.timer.longBreakTypeLabelClass="col-md-2 typeLabel";
    }
    else if (type === 'break') {
      Store.timer.isBreak = true;
      Store.timer.goalMinutes = 5;
      Store.timer.pomoTypeLabelClass="col-md-1 typeLabel";
      Store.timer.breakTypeLabelClass="col-md-1 typeLabel selected";
      Store.timer.longBreakTypeLabelClass="col-md-2 typeLabel";
    }
    else {
      Store.timer.isBreak = true;
      Store.timer.goalMinutes = 15;
      Store.timer.pomoTypeLabelClass="col-md-1 typeLabel";
      Store.timer.breakTypeLabelClass="col-md-1 typeLabel";
      Store.timer.longBreakTypeLabelClass="col-md-2 typeLabel selected";
    }

    ea.publish('CHANGE');
  },
}

