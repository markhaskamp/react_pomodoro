var ea;

var Store = {
  elapsedSeconds: 0,
  timerRunning:   true,
  toggleLabel:    'Stop',

  handleTick: function(evt) {
    Store.elapsedSeconds = Store.elapsedSeconds + 1;    
    ea.publish('CHANGE');
  },

  handleTimerToggle: function(evt) {
    Store.timerRunning = !Store.timerRunning;
    if (Store.timerRunning) {
      Store.toggleLabel = "Stop";
    }
    else {
      Store.toggleLabel = "Start";
    }

    ea.publish('CHANGE');
  }
}

function drunkDrawer(stuff) {
  console.log('drunkDrawer. stuff: ' + stuff);
}

$(document).ready(function() {
  ea = new EventAggregator();
  ea.subscribe('TICK', 'handleTick', Store.handleTick);
  ea.subscribe('TIMER_TOGGLE', 'handleTimerToggle', Store.handleTimerToggle);
});
