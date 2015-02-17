var ea;

var Store = {
  timer: timer_model,
  pomodoroList: pomodoroListModel
}

function seconds_display(s) {
  return s < 10 ? '0' + s : s;
}

function junkDrawer(misc) {
  console.log('junkDrawer. this: ' + this.fn.name);
}

function handleTick(evt) {
  ea.publish('TICK', {});
}

ea = new EventAggregator();

Store.timer.setSubscriptions();
Store.pomodoroList.setSubscriptions();

setInterval(handleTick, 1000);



$(function() {
  $("#pomo-slider").slider({
    range: 'min',
    value: 25,
    min: 0,
    max: 41,
    slide: function(evt, ui) {
      var newMinutes = $('#pomo-slider').slider('value');
      ea.publish('POMO_MINUTES_CHANGED', {minutes: newMinutes});
    }
  });
});

$(function() {
  $("#break-slider").slider({
    range: 'min',
    value: 5,
    min: 0,
    max: 41,
    slide: function(evt, ui) {
      var newMinutes = $('#break-slider').slider('value');
      ea.publish('BREAK_MINUTES_CHANGED', {minutes: newMinutes});
    }
  });
});

$(function() {
  $("#long-break-slider").slider({
    range: 'min',
    value: 15,
    min: 0,
    max: 41,
    slide: function(evt, ui) {
      var newMinutes = $('#long-break-slider').slider('value');
      ea.publish('LONG_BREAK_MINUTES_CHANGED', {minutes: newMinutes});
    }
  });
});
