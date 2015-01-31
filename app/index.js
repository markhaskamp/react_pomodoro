var ea;

var Store = {
  elapsedSeconds: 0,

  handleTick: function(evt) {
    Store.elapsedSeconds = Store.elapsedSeconds + 1;    
    // console.log(Store.elapsedSeconds);
  }
}

$(document).ready(function() {
  ea = new EventAggregator();
  ea.subscribe('TICK', 'handleTick', Store.handleTick);
});
