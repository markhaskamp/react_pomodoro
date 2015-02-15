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
    min: 19,
    max: 41,
    slide: function(evt, ui) {
      $('#pomoMinutes').val($('#pomo-slider').slider('value'));
    }
  });
});

$(function() {
  $("#break-slider").slider({
    range: 'min',
    value: 5,
    min: 2,
    max: 11,
    slide: function(evt, ui) {
      $('#breakMinutes').val($('#break-slider').slider('value'));
    }
  });
});

$(function() {
  $("#long-break-slider").slider({
    range: 'min',
    value: 15,
    min: 9,
    max: 21,
    slide: function(evt, ui) {
      $('#longBreakMinutes').val($('#long-break-slider').slider('value'));
    }
  });
});
